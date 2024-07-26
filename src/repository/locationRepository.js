import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const fetchLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations`);
    return response.data.locations;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
