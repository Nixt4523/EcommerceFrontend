import Breadcrums from "@components/Breadcrums";
import IncomePieChart from "@components/Charts/Income/IncomePieChart";
import OrdersPieChart from "@components/Charts/Orders/OrdersPieChart";
import ProductsPieChart from "@components/Charts/Products/ProductsPieChart";
import UsersPieChart from "@components/Charts/Users/UsersPieChart";

function PieCharts() {
	return (
		<div className="w-full h-full flex flex-col items-start justify-start overflow-y-scroll scrollbar scrollbar-none">
			<div className="flex items-center gap-8 mb-8">
				<h1 className="text-4xl font-medium">Pie Charts</h1>
				<Breadcrums />
			</div>
			<div className="w-full h-1/2 flex items-center gap-4 mb-4">
				<div className="flex-1 h-full">
					<IncomePieChart />
				</div>
				<div className="flex-1 h-full">
					<UsersPieChart />
				</div>
			</div>
			<div className="w-full h-1/2 flex items-center gap-4">
				<div className="flex-1 h-full">
					<ProductsPieChart />
				</div>
				<div className="flex-1 h-full">
					<OrdersPieChart />
				</div>
			</div>
		</div>
	);
}

export default PieCharts;
