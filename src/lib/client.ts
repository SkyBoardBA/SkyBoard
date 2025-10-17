import axios from "axios";
export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL || "http://localhost:3000",
  withCredentials: true,
  timeout: 15000,
});
axiosClient.interceptors.response.use((res) => res, async (error) => {
  const status = error?.response?.status;
  if (status === 401) { /* TODO: refresh or redirect */ }
  return Promise.reject(error);
});