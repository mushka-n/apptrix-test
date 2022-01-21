import { Navigate, Outlet } from "react-router-dom";
import { LOGIN_ROUTE } from "../../consts";

const PrivateRoute = () => {
    const isAuth =
        localStorage.getItem("accessToken") &&
        localStorage.getItem("refreshToken");

    if (isAuth) return <Outlet />;
    return <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;
