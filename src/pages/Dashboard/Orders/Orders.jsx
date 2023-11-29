import Breadcrums from "@components/Breadcrums";
import OrdersTable from "@components/Orders/OrdersTable";
import Topbar from "@components/Orders/Topbar";

function Orders() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Orders</h1>
				<Breadcrums />
			</div>
			<Topbar />
			<OrdersTable />
		</div>
	);
}

export default Orders;
