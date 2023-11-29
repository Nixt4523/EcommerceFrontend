import { Suspense, useContext } from "react";
import {
	Outlet,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import { SidebarContext } from "@context/SidebarContext";

import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

import Stats from "@pages/Dashboard/Stats/Stats";

import AddUser from "@pages/Dashboard/Users/AddUser";
import EditUser from "@pages/Dashboard/Users/EditUser";
import Users from "@pages/Dashboard/Users/Users";

import AddProduct from "@pages/Dashboard/Products/AddProduct";
import EditProduct from "@pages/Dashboard/Products/EditProduct";
import Products from "@pages/Dashboard/Products/Products";

import EditOrder from "@pages/Dashboard/Orders/EditOrder";
import Orders from "@pages/Dashboard/Orders/Orders";

import BarCharts from "@pages/Charts/BarCharts";
import LineCharts from "@pages/Charts/LineCharts";
import PieCharts from "@pages/Charts/PieCharts";

import AddCrouselImage from "@pages/Store/Crousel/AddCrouselImage";
import EditCrouselImage from "@pages/Store/Crousel/EditCrouselImage";
import Crousel from "@pages/Store/Crousel/Crousel";

import AddCupon from "@pages/Store/Cupon/AddCupon";
import Cupon from "@pages/Store/Cupon/Cupon";

import EditSale from "@pages/Store/Sale/EditSale";
import Sale from "@pages/Store/Sale/Sale";

function App() {
	const { state } = useContext(SidebarContext);

	const Loading = () => {
		return <h1>Loading..!</h1>;
	};

	const Layout = () => {
		return (
			<div className="flex flex-col w-screen h-screen overflow-x-hidden scrollbar scrollbar-none scroll-smooth">
				<div className="sticky top-0 z-50">
					<Navbar />
				</div>
				<div className="w-full h-full flex p-4">
					<div className={state.isExpanded ? "flex-[1.5]" : "flex-none w-fit"}>
						<Sidebar />
					</div>
					<div className="divider lg:divider-horizontal"></div>
					<div className="flex-[8] overflow-hidden scrollbar scrollbar-none scroll-smooth h-full">
						<Suspense fallback={<Loading />}>
							<Outlet />
						</Suspense>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Router>
			<Routes>
				<Route path="admin" element={<Layout />}>
					<Route path="" element={<Stats />} />
					<Route path="users">
						<Route path="" element={<Users />} />
						<Route path="add" element={<AddUser />} />
						<Route path="edit" element={<EditUser />} />
					</Route>
					<Route path="products">
						<Route path="" element={<Products />} />
						<Route path="add" element={<AddProduct />} />
						<Route path="edit" element={<EditProduct />} />
					</Route>
					<Route path="orders">
						<Route path="" element={<Orders />} />
						<Route path="edit" element={<EditOrder />} />
					</Route>
					<Route path="chart">
						<Route path="linechart" element={<LineCharts />} />
						<Route path="barchart" element={<BarCharts />} />
						<Route path="piechart" element={<PieCharts />} />
					</Route>
					<Route path="crousel">
						<Route path="" element={<Crousel />} />
						<Route path="add" element={<AddCrouselImage />} />
						<Route path="edit" element={<EditCrouselImage />} />
					</Route>
					<Route path="sale">
						<Route path="" element={<Sale />} />
						<Route path="edit" element={<EditSale />} />
					</Route>
					<Route path="cupon">
						<Route path="" element={<Cupon />} />
						<Route path="add" element={<AddCupon />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
