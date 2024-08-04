import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations`);
    return response.data.locations;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const registerProfessional = async (professionalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/professional`, professionalData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
