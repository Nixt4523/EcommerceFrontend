import IncomeBarChart from "@components/Charts/Income/IncomeBarChart";
import OrdersBarChart from "@components/Charts/Orders/OrdersBarChart";
import ProductsBarChart from "@components/Charts/Products/ProductsBarChart";
import UsersBarChart from "@components/Charts/Users/UsersBarChart";
import Breadcrums from "@components/Breadcrums";

function BarCharts() {
	return (
		<div className="w-full h-full flex flex-col items-start justify-start overflow-y-scroll scrollbar scrollbar-none">
			<div className="flex items-center gap-8 mb-8">
				<h1 className="text-4xl font-medium">Bar Charts</h1>
				<Breadcrums />
			</div>
			<div className="w-full h-1/2 flex items-center gap-4 mb-4">
				<div className="flex-1 h-full">
					<IncomeBarChart />
				</div>
				<div className="flex-1 h-full">
					<UsersBarChart />
				</div>
			</div>
			<div className="w-full h-1/2 flex items-center gap-4">
				<div className="flex-1 h-full">
					<ProductsBarChart />
				</div>
				<div className="flex-1 h-full">
					<OrdersBarChart />
				</div>
			</div>
		</div>
	);
}

export default BarCharts;
