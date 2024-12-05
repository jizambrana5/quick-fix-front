import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }), // Ignora certificados no válidos
});

export const fetchLocations = async () => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/locations`);
    return response.data.locations;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

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
