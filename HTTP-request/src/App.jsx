import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.jsx';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchPlaces = async () => {
      try {
        const places = await fetchUserPlaces();

        setUserPlaces(places);
      } catch (error) {
        setError({
          message:
            error.message || 'could not fetch places, please try again later.',
        });
      }

      setLoading(false);
    };

    fetchPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  const handleSelectPlace = async (selectedPlace) => {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || 'Failed to update places.',
      });
    }
  };

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || 'Failed to delete places',
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  const handleCloseError = () => {
    setErrorUpdatingPlaces(null);
  };

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleCloseError}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occured!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleCloseError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && (
          <Error title="An error is occured!" message={error.message} />
        )}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText={
              isLoading
                ? 'Loading...'
                : 'Select the places you would like to visit below.'
            }
            isLoading={isLoading}
            loadingText="Fetching your places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
