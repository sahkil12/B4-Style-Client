import useAuth from "../../Hooks/useAuth";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard/AdminDashboard";

const DashboardLayout = () => {

     const { user } = useAuth()

     return (
          <div>
               <AdminDashboard></AdminDashboard>
          </div>
     );
};

export default DashboardLayout;