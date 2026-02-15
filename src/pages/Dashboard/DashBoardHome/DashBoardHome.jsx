import useUserRole from '../../../Hooks/useUserRole';
import Loader from '../../../Components/Shared/Loader';
import UserDashboard from '../userDashboard/userDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import NotFound from '../../../Components/Shared/NotFound';

const DashBoardHome = () => {
     const { role, isLoading } = useUserRole()
     
     if (isLoading) {
          return <Loader></Loader>
     }

     if (role?.role === "user") {
          return <UserDashboard></UserDashboard>
     }
     else if (role?.role === "admin") {
          return <AdminDashboard></AdminDashboard>
     }
     else {
          return <NotFound></NotFound>
     }
};

export default DashBoardHome;