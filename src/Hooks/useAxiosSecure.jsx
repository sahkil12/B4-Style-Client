import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
     baseURL: `${import.meta.env.VITE_API_URL}`
     // baseURL: "https://b4-style-backend.onrender.com/"
})

const useAxiosSecure = () => {
     const { user } = useAuth()

     useEffect(() => {
          const requestInterceptor = axiosSecure.interceptors.request.use(
               async (config) => {
                    if (user) {
                         const token = await user.getIdToken();
                         config.headers.authorization = `Bearer ${token}`;
                    }
                    return config;
               }
          );
          return () => {
               axiosSecure.interceptors.request.eject(requestInterceptor);
          };
     }, [user])

     return axiosSecure
};

export default useAxiosSecure;