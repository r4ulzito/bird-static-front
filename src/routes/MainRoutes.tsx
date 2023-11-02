import {
    RouterProvider,
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";

const routes = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <Navigate to="/login" />,
    },
]);

export const MainRoutes = () => {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
};
