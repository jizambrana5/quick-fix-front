import axios from "axios";
import { getToken } from "../auth";
import { axiosInstance, API_BASE_URL } from "./locationRepository";

export const registerProfessional = async (professionalData) => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/professional`,
      professionalData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Función para iniciar sesión de un usuario
export const loginProfessional = async (loginData) => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/professional/login`,
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : error.message);
  }
};

export const fetchProfessional = async (professionalId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.get(
      `${API_BASE_URL}/professional/${professionalId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching professional details"
    );
  }
};

export const fetchProfessionalOrders = async (professionalId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.get(
      `${API_BASE_URL}/order/professional/${professionalId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching professional orders"
    );
  }
};
