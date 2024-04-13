import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import LayOut from "../views/Layout";
import InstrumentList from "../views/InstrumentList";
import WorkShop from "../views/WorkShop";
import Equipment from "../views/EquipmentList";
import NewPerson from "../views/NewPerson";
import Monitoring from "../views/Monitoring";

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
				path: "workshop",
				element: <WorkShop />,
			},
			{
				path: "equipment",
				element: <Equipment />,
			},
			{
				path: "person_info/new",
				element: <NewPerson />,
			},
			{
				path: "person_info/monitoring",
				element: <Monitoring />,
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
