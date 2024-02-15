import axios from 'axios';

const BASE_URL = 'http://localhost:13002/api/components';

export const fetchComponents = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch components:', error);
    return [];
  }
};
