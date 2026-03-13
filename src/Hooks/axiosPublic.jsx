import axios from "axios";

const axiosPublic = axios.create({
     baseURL: `${import.meta.env.VITE_API_URL}`
     // baseURL: "https://b4-style-backend.onrender.com/"
})

export default axiosPublic;