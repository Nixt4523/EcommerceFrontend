/* eslint-disable react/prop-types */
import { IncomeData } from "@utils/IncomeChartData";
import { useState } from "react";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

function IncomeBarChart() {
	const [showInfoCard, setShowInfoCard] = useState(false);
	const [showAxis, setShowAxis] = useState(true);

	return (
		<div className="w-full h-full border-2 rounded-md p-4 space-y-4">
			<div className="flex items-center gap-4">
				<h1 className="text-2xl font-medium">Income</h1>
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
								<span className="label-text">Info Card</span>
								<input
									type="checkbox"
									className="checkbox checkbox-xs"
									checked={showInfoCard}
									onChange={() => {
										setShowInfoCard((prev) => !prev);
									}}
								/>
							</label>
							<label className="label cursor-pointer gap-4">
								<span className="label-text">Enable Axis</span>
								<input
									type="checkbox"
									className="checkbox checkbox-xs"
									checked={showAxis}
									onChange={() => {
										setShowAxis((prev) => !prev);
									}}
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			<ResponsiveContainer height={"90%"}>
				<BarChart data={IncomeData}>
					{showAxis && (
						<>
							<XAxis dataKey="month" />
							<YAxis />
						</>
					)}
					{showInfoCard && <Tooltip content={<CustomTooltip />} />}
					<Bar
						dataKey="income"
						fill="#F2F2F2"
						stroke="#000000"
						strokeWidth={2}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default IncomeBarChart;
