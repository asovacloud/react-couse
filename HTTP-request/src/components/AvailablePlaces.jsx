import { useState, useEffect } from 'react';
import { fetchAvailablePlaces } from '../http.jsx';
import { sortPlacesByDistance } from '../loc.js';
import Error from './Error.jsx';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchPlaces = async () => {
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const sortedPlaces = sortPlacesByDistance(
            places,
            latitude,
            longitude
          );
          setAvailablePlaces(sortedPlaces);

          setLoading(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || 'could not fetch places, please try again later.',
        });
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
