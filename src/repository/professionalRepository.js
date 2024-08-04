import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

//Mock la función loginProfessional
export const loginProfessional = async (loginData) => {
  // Simulación de respuesta de éxito
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          message: 'Login successful',
          professional: {
            email: loginData.email,
          },
        },
      });
    }, 1000); // Simula un retraso de 1 segundo
  });

  // return Promise.reject(new Error('Mock error'));
};

export const fetchProfessional = async (professionalId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/professional/${professionalId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching professional details');
  }
};

export const fetchProfessionalOrders = async (professionalId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/professional/${professionalId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching professional orders');
  }
};
