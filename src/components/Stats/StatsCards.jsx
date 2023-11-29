/* eslint-disable react/prop-types */
import { AnimatedCounter } from "react-animated-counter";
import { statsCardData } from "@utils/StatsCardData.jsx";

function StatsCards() {
	const Card = ({ icon, title, trend, value }) => {
		return (
			<div className="flex-1 h-fit p-4 border-2 rounded-md flex flex-col items-center gap-4">
				<div className="flex w-full items-center gap-4">
					<div className="p-5 rounded-full bg-base-300 h-14 w-14 flex items-center justify-center">
						<span className="material-symbols-outlined scale-125">{icon}</span>
					</div>
					<div>
						<h1 className="uppercase text-xs font-medium opacity-50">
							{title.split(" ")[0]}
						</h1>
						<h1 className="uppercase font-medium text-xl">
							{title.split(" ")[1]}
						</h1>
					</div>
				</div>
				<div className="flex w-full items-center justify-between">
					<span
						className={`material-symbols-outlined font-medium text-4xl ${
							trend === "trending_up" ? "text-success" : "text-warning"
						}`}
					>
						{trend}
					</span>
					<h1 className="text-2xl font-bold">
						<AnimatedCounter
							value={value}
							fontSize="36px"
							includeDecimals={false}
							incrementColor="#000000"
						/>
					</h1>
				</div>
			</div>
		);
	};

	return (
		<div className="flex items-center justify-between gap-4">
			{statsCardData.map((item) => {
				return (
					<Card
						key={item.id}
						icon={item.icon}
						title={item.title}
						trend={item.trend}
						value={item.value}
					/>
				);
			})}
		</div>
	);
}

export default StatsCards;
