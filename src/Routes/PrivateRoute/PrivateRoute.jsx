import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Loader from "../../Components/Shared/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const location = useLocation()

    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate
            to="/auth/sign_in"
            state={ location?.pathname }
            replace
        >
        </Navigate>
    }
    return children
};
export default PrivateRoute;