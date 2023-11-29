/* eslint-disable react/prop-types */
import { ProductsData } from "@utils/ProductsChartData";
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

function ProductsBarChart() {
	const [showInfoCard, setShowInfoCard] = useState(false);
	const [showAxis, setShowAxis] = useState(true);
	const [showMenAndWomen, setShowMenAndWomen] = useState(true);

	return (
		<div className="w-full h-full border-2 rounded-md p-4 space-y-4">
			<div className="flex items-center gap-4">
				<h1 className="text-2xl font-medium">Products</h1>
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
								<span className="label-text">Men & Women</span>
								<input
									type="checkbox"
									checked={showMenAndWomen}
									className="checkbox checkbox-xs"
									onChange={() => {
										setShowMenAndWomen((prev) => !prev);
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
				<BarChart data={ProductsData}>
					{showAxis && (
						<>
							<XAxis dataKey="month" />
							<YAxis />
						</>
					)}
					{showInfoCard && (
						<Tooltip
							content={<CustomTooltip showMenAndWomen={showMenAndWomen} />}
						/>
					)}
					<Bar
						dataKey="products"
						fill="#F2F2F2"
						stroke="#000000"
						strokeWidth={2}
					/>
					{showMenAndWomen && (
						<>
							<Bar
								dataKey="men"
								fill="#0072f5"
								fillOpacity="0.2"
								stroke="#0072f5"
								strokeWidth={2}
							/>
							<Bar
								dataKey="women"
								fill="#de1b8d"
								fillOpacity="0.2"
								stroke="#de1b8d"
								strokeWidth={2}
							/>
						</>
					)}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default ProductsBarChart;
