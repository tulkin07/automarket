import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // timeout:5000,
  headers: {
    // "Accept": "application/json",
    "ngrok-skip-browser-warning": "true", // 👈 ENG MUHIM QATOR
  },

});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("automarketToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (err) => {
    // const originalRequest = err.config;

    // if (err.response?.status === 401 && !originalRequest._retry) {
    //   window.location.href = "/login";
    //   localStorage.removeItem("automarketToken");
    // }

    return Promise.reject(err);
  },
);

export default api;
