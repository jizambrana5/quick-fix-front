import axios from "axios";
import { getToken } from "../auth";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// Función para registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post(
      `${API_BASE_URL}/user`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3000",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Función para obtener las órdenes de un usuario
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
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Función para obtener los detalles de un usuario
export const fetchUser = async (userId) => {
  try {
    const token = getToken();
    const response = await axiosInstance.get(`${API_BASE_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching user details"
    );
  }
};

// Función para iniciar sesión de un usuario
export const loginUser = async (loginData) => {
  try {
    console.log("Sending login request to:", `${API_BASE_URL}/user/login`);
    console.log("Login data:", loginData);

    const response = await axiosInstance.post(
      `${API_BASE_URL}/user/login`,
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response || error.message);
    throw new Error(error.response ? error.response.data.error : error.message);
  }
};
