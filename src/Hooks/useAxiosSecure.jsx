import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
     baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
     const {user} = useAuth()

     return axiosSecure
};

export default useAxiosSecure;