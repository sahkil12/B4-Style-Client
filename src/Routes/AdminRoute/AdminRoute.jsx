import useUserRole from './../../Hooks/useUserRole';
import Loader from "../../Components/Shared/Loader"
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
     const { role, isLoading } = useUserRole()

     if (isLoading) {
          return <Loader></Loader>
     }

     if (role?.role !== "admin") {
          return <Navigate to={'/forbidden'} replace></Navigate>
     }

     return children
};

export default AdminRoute;