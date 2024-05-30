import axios from "axios";
const token = localStorage.getItem("token");
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4269",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
