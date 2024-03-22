import { createBrowserRouter, RouterProvider, Navigator } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigator to="/home" />,
	},
    {
        path:"/home",
        element:<div>1</div>
    }
]);

export default router;
