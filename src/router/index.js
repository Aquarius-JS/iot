import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <h1>111</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
