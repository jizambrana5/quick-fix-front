import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const registerProfessional = async (professionalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/professional/`, professionalData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
