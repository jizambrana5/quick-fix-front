// src/repository/userRepository.js
import axios from 'axios';

const API_BASE_URL = '/api';

// Mockea la función loginUser
export const loginUser = async (loginData) => {
  // Simulación de respuesta de éxito
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          message: 'Login successful',
          user: {
            email: loginData.email,
          },
        },
      });
    }, 1000); // Simula un retraso de 1 segundo
  });

  // Si quieres simular un error, puedes lanzar una excepción
  // return Promise.reject(new Error('Mock error'));
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user`, userData, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const fetchUserOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching user details');
  }
};