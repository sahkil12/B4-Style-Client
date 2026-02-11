import Loader from '../../Components/Shared/Loader';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AuthProtected = ({ children }) => {
     const { user } = useAuth()

     if (user) {
          return <Navigate to={'/'} replace ></Navigate >
     }
     return children
};

export default AuthProtected;