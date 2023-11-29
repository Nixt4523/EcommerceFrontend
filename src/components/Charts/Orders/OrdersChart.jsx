/* eslint-disable react/prop-types */
import { useState } from "react";
import {
	Area,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import { OrdersData } from "@utils/OrdersChartData";
import CustomTooltip from "./CustomTooltip";

function OrdersChart() {
	const [showDots, setShowDots] = useState(false);
	const [showInfoCard, setShowInfoCard] = useState(false);
	const [showAxis, setShowAxis] = useState(true);
	const [showCompleted, setShowCompleted] = useState(true);

	return (
		<div className="w-full h-full border-2 rounded-md p-4 space-y-4">
			<div className="flex items-center gap-4">
				<h1 className="text-2xl font-medium">Orders </h1>
				<div className="dropdown dropdown-right">
					<label tabIndex={0} className="cursor-pointer">
						<div className="p-2 rounded-full bg-base-300 flex items-center justify-center">
							<span className="material-symbols-outlined">menu</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className="dropdown-content z-[1] card card-compact w-max p-2  bg-base-100 border-2 border-base-300 rounded-md ml-2"
					>
						<div className="card-body">
							<label className="label cursor-pointer gap-4">
								<span className="label-text">Graph Dots</span>
								<input
									type="checkbox"
									checked={showDots}
									className="checkbox checkbox-xs"
									onChange={() => {
										setShowDots((prev) => !prev);
									}}
								/>
							</label>
							<label className="label cursor-pointer gap-4">
								<span className="label-text">Info Card</span>
								<input
									type="checkbox"
									checked={showInfoCard}
									className="checkbox checkbox-xs"
									onChange={() => {
										setShowInfoCard((prev) => !prev);
									}}
								/>
							</label>
							<label className="label cursor-pointer gap-4">
								<span className="label-text">Completed Orders</span>
								<input
									type="checkbox"
									checked={showCompleted}
									className="checkbox checkbox-xs"
									onChange={() => {
										setShowCompleted((prev) => !prev);
									}}
								/>
							</label>
							<label className="label cursor-pointer gap-4">
								<span className="label-text">Enable Axis</span>
								<input
									type="checkbox"
									checked={showAxis}
									className="checkbox checkbox-xs"
									onChange={() => {
										setShowAxis((prev) => !prev);
									}}
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			<ResponsiveContainer width={"100%"} height={"90%"}>
				<AreaChart data={OrdersData} stackOffset="shiloutee">
					{showAxis && (
						<>
							<XAxis dataKey={"month"} />
							<YAxis />
						</>
					)}
					{showInfoCard && (
						<Tooltip
							content={<CustomTooltip showCompleted={showCompleted} />}
						/>
					)}
					<Area
						fillOpacity="1"
						fill="#F2F2F2"
						type="linear"
						dataKey="orders"
						stroke="#000000"
						strokeWidth={2}
						dot={showDots}
					/>
					{showCompleted && (
						<Area
							fillOpacity="0.2"
							fill="#21CA51"
							type="linear"
							dataKey="completed"
							stroke="#21CA51"
							strokeWidth={2}
							dot={showDots}
						/>
					)}
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

export default OrdersChart;
