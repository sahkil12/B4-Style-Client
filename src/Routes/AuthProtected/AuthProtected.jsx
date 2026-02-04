import Loader from '../../Components/Shared/Loader';
import UseAuth from '../../Hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const AuthProtected = ({ children }) => {
     const { user, loading } = UseAuth()

     if (loading) {
          return <Loader></Loader>
     }
     if (user) {
          return <Navigate to={'/'} replace ></Navigate >
     }
     return children
};

export default AuthProtected;