import Breadcrums from "@components/Breadcrums";
import IncomeChart from "@components/Charts/Income/IncomeChart";
import UsersChart from "@components/Charts/Users/UsersChart";
import StatsCards from "@components/Stats/StatsCards";

function Stats() {
	return (
		<div className="w-full h-full space-y-6	overflow-y-auto scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Statistics</h1>
				<Breadcrums />
			</div>
			<StatsCards />
			<div className="h-2/4">
				<IncomeChart />
			</div>
			<div className="h-2/4">
				<UsersChart />
			</div>
		</div>
	);
}

export default Stats;
