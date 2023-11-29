/* eslint-disable react/prop-types */
function CustomTooltip({ active, payload }) {
	let month;
	let income;

	if (active) {
		month = payload[0].payload.month;
		income = payload[0].payload.income;
	}

	return (
		<div className="bg-base-100 w-fit h-1/2 p-4 rounded-md border-2 border-base-300 flex gap-4 flex-col">
			<div className="flex items-center gap-4">
				<div className="p-5 rounded-full bg-base-300 h-14 w-14 flex items-center justify-center">
					<span className="material-symbols-outlined scale-125">
						calendar_month
					</span>
				</div>
				<div>
					<h1 className="uppercase text-xs font-medium opacity-50">Month</h1>
					<h1 className="text-xl font-medium">{month}</h1>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="p-5 rounded-full bg-base-300 h-14 w-14 flex items-center justify-center">
					<span className="material-symbols-outlined scale-125">paid</span>
				</div>
				<div>
					<h1 className="uppercase text-xs font-medium opacity-50">Income</h1>
					{income < 1000 ? (
						<h1 className="uppercase text-xl font-medium">{income}k</h1>
					) : (
						<h1 className="uppercase text-xl font-medium">
							{(income / 1000).toPrecision(2)}m
						</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default CustomTooltip;
