export const fetchAvailablePlaces = async () => {
  const response = await fetch('http://localhost:3030/places');
  const { places } = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places.');
  }

  return places;
};
