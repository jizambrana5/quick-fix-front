import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://35.193.174.196";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
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
