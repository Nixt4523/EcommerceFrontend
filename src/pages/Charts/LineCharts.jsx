import Breadcrums from "@components/Breadcrums";
import IncomeChart from "@components/Charts/Income/IncomeChart";
import OrdersChart from "@components/Charts/Orders/OrdersChart";
import ProductsChart from "@components/Charts/Products/ProductsChart";
import UsersChart from "@components/Charts/Users/UsersChart";

function LineCharts() {
	return (
		<div className="w-full h-full flex flex-col items-start justify-start overflow-y-scroll scrollbar scrollbar-none">
			<div className="flex items-center gap-8 mb-8">
				<h1 className="text-4xl font-medium">Line Charts</h1>
				<Breadcrums />
			</div>
			<div className="w-full h-1/2 flex items-center gap-4 mb-4">
				<div className="flex-1 h-full">
					<IncomeChart />
				</div>
				<div className="flex-1 h-full">
					<UsersChart />
				</div>
			</div>
			<div className="w-full h-1/2 flex items-center gap-4">
				<div className="flex-1 h-full">
					<ProductsChart />
				</div>
				<div className="flex-1 h-full">
					<OrdersChart />
				</div>
			</div>
		</div>
	);
}

export default LineCharts;
