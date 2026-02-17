import useUserRole from './../../Hooks/useUserRole';
import Loader from "../../Components/Shared/Loader"

const AdminRoute = ({ children }) => {
     const { role, isLoading } = useUserRole()

     if (isLoading) {
          return <Loader></Loader>
     }

     if (role !== "admin") {
          return <Navigate to={'/'} replace></Navigate>
     }

     return children
};

export default AdminRoute;