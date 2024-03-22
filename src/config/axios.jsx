import axios from "axios";

const axiosCliente = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

export default axiosCliente;
