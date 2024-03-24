import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import LayOut from "../views/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayOut />,
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
