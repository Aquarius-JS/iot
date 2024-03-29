import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import LayOut from "../views/Layout";
import InstrumentList from "../views/InstrumentList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayOut />,
		children: [
			{
				path: "instrument_list",
				element: <InstrumentList />,
			},
		],
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
