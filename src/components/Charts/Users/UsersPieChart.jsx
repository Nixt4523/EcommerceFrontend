/* eslint-disable react/prop-types */
import { UsersData } from "@utils/UsersChartData";
import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

function UsersPieChart() {
	const [showDetails, setShowDetails] = useState(true);
	const [activeIndex, setActiveIndex] = useState(true);

	const onPieHover = (_, index) => {
		setActiveIndex(index);
	};

	const renderActiveShape = (props) => {
		const RADIAN = Math.PI / 180;
		const {
			cx,
			cy,
			midAngle,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			month,
			users,
		} = props;

		const sin = Math.sin(-RADIAN * midAngle);
		const cos = Math.cos(-RADIAN * midAngle);
		const sx = cx + (outerRadius + 10) * cos;
		const sy = cy + (outerRadius + 10) * sin;
		const mx = cx + (outerRadius + 30) * cos;
		const my = cy + (outerRadius + 30) * sin;
		const ex = mx + (cos >= 0 ? 1 : -1) * 22;
		const ey = my;
		const textAnchor = cos >= 0 ? "start" : "end";

		return (
			<g>
				<text
					x={cx}
					y={cy}
					dy={8}
					textAnchor="middle"
					fill="#000000"
					className="uppercase font-medium"
				>
					{month}
				</text>
				<Sector
					cx={cx}
					cy={cy}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill="#000000"
				/>
				<Sector
					cx={cx}
					cy={cy}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius + 6}
					outerRadius={outerRadius + 10}
					fill="#000000"
				/>
				<path
					d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
					stroke="#000000"
					strokeWidth={2}
					fill="none"
				/>
				<circle cx={ex} cy={ey} r={4} fill="#000000" stroke="none" />
				<text
					x={ex + (cos >= 0 ? 1 : -1) * 12}
					y={ey}
					textAnchor={textAnchor}
					fill="#000000"
					className="uppercase font-medium"
				>
					{users < 1000
						? `users ${users}k`
						: `users ${(users / 1000).toPrecision(2)}m`}
				</text>
			</g>
		);
	};

	return (
		<div className="w-full h-full border-2 rounded-md p-4 space-y-4 overflow-hidden">
			<div className="flex items-center gap-4">
				<h1 className="text-2xl font-medium">Users</h1>
				<div className="dropdown dropdown-right">
					<label tabIndex={0} className="cursor-pointer">
						<div className="p-2 rounded-full bg-base-300 flex items-center justify-center">
							<span className="material-symbols-outlined">menu</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className="dropdown-content z-[1] card card-compact w-max p-2 bg-base-100 border-2 border-base-300 rounded-md ml-2"
					>
						<div className="card-body">
							<label className="label cursor-pointer gap-4">
								<span className="label-text">Show Details</span>
								<input
									type="checkbox"
									className="checkbox checkbox-xs"
									checked={showDetails}
									onChange={() => {
										setShowDetails((prev) => !prev);
									}}
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			<ResponsiveContainer height={"100%"} width={"100%"}>
				<PieChart width="100%" height="100%">
					<Pie
						activeIndex={activeIndex}
						activeShape={showDetails && renderActiveShape}
						onMouseEnter={onPieHover}
						data={UsersData}
						innerRadius={showDetails && 50}
						outerRadius={150}
						fill="#F2F2F2"
						fillOpacity={1}
						paddingAngle={showDetails && 0}
						dataKey="users"
						stroke="#000000"
						strokeWidth={2}
					></Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

export default UsersPieChart;
