import axios from "axios";
import { getToken } from "../auth";
import { axiosInstance, API_BASE_URL } from "./locationRepository";

export const fetchUserOrders = async (userId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.get(
      `${API_BASE_URL}/order/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching user orders"
    );
  }
};

export const fetchOrder = async (orderId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.get(
      `${API_BASE_URL}/order/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching order details"
    );
  }
};

export const fetchProfessionalsByLocationAndProfession = async (
  department,
  district,
  profession
) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/professionals/${department}/${district}/${profession}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching professionals"
    );
  }
};

export const fetchOrdersByProfessionalAndDate = async (
  professionalId,
  date
) => {
  try {
    const token = getToken();
    const formattedDate = new Date(date).toISOString().split("T")[0]; // Asegurarse de que la fecha esté en formato YYYY-MM-DD
    const response = await axiosInstance.get(
      `${API_BASE_URL}/order/professional/${professionalId}/day/${formattedDate}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data || []; // Devolver un array vacío si la respuesta es null
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error fetching orders for professional and date"
    );
  }
};

export const createOrder = async (orderData) => {
  try {
    const token = getToken();
    const response = await axiosInstance.post(
      `${API_BASE_URL}/order`,
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error creating order");
  }
};

export const acceptOrder = async (orderId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.put(
      `${API_BASE_URL}/order/${orderId}/accept`,
      {}, // Este es el cuerpo de la solicitud, en este caso vacío
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error accepting order");
  }
};

export const cancelOrder = async (orderId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.put(
      `${API_BASE_URL}/order/${orderId}/cancel`,
      {}, // Este es el cuerpo de la solicitud, en este caso vacío
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error canceling order");
  }
};

export const completeOrder = async (orderId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.put(
      `${API_BASE_URL}/order/${orderId}/complete`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error completing order");
  }
};
