export const fetchAvailablePlaces = async () => {
  const response = await fetch('http://localhost:3030/places');
  const { places } = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places.');
  }

  return places;
};

export const updateUserPlaces = async (places) => {
  const response = await fetch('http://localhost:3030/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update places.');
  }

  return data;
};
