import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; // Replace with your actual base API URL

// Function to retrieve the token
const getToken = () => {
  return localStorage.getItem("token"); // Adjust based on how you store the token
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to automatically include the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle any error that occurs when setting up the request
    return Promise.reject(error);
  }
);

export default axiosInstance;
