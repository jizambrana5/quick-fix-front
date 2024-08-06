import axios from 'axios';
import { getToken } from '../auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

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

// Función para iniciar sesión de un usuario
export const loginProfessional = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/professional/login`, loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : error.message);
  }
};


export const fetchProfessional = async (professionalId) => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_BASE_URL}/professional/${professionalId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching professional details');
  }
};

export const fetchProfessionalOrders = async (professionalId) => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_BASE_URL}/order/professional/${professionalId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching professional orders');
  }
};
