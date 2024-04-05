import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import LayOut from "../views/Layout";
import InstrumentList from "../views/InstrumentList";
import Equipment from "../views/EquipmentList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayOut />,
		children: [
			{
				path: "",
				element: <Navigate to="/instrument_list" />,
			},
			{
				path: "instrument_list",
				element: <InstrumentList />,
			},
			{
				path:"workshop",
				element:<div>生产车间信息</div>
			},
			{
				path: "equipment",
				element: <Equipment />,
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
