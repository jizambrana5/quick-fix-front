import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

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
