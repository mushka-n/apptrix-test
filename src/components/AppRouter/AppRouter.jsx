import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { authRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
    return (
        <Routes>
            {authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<PrivateRoute />}>
                    <Route key={path} path={path} element={<Component />} />
                </Route>
            ))}

            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<div>Page Not Found</div>}></Route>
        </Routes>
    );
};

export default AppRouter;
