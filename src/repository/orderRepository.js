import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const fetchUserOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching user orders');
  }
};

export const fetchOrder = async (orderId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/${orderId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching order details');
  }
};

export const fetchProfessionalsByLocationAndProfession = async (department, district, profession) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/professionals/${department}/${district}/${profession}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching professionals');
  }
};

export const fetchOrdersByProfessionalAndDate = async (professionalId, date) => {
  try {
    const formattedDate = new Date(date).toISOString().split('T')[0]; // Asegurarse de que la fecha esté en formato YYYY-MM-DD
    const response = await axios.get(`${API_BASE_URL}/order/professional/${professionalId}/day/${formattedDate}`);
    return response.data || []; // Devolver un array vacío si la respuesta es null
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching orders for professional and date');
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`, orderData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating order');
  }
};

export const acceptOrder = async (orderId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/order/${orderId}/accept`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error accepting order');
  }
};

export const cancelOrder = async (orderId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/order/${orderId}/cancel`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error canceling order');
  }
};

export const completeOrder = async (orderId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/order/${orderId}/complete`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error completing order');
  }
};