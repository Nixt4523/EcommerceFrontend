/* eslint-disable react/prop-types */
function CustomTooltip({ active, payload, showCompleted }) {
	let month;
	let orders;
	let completed;

	if (active) {
		month = payload[0].payload.month;
		orders = payload[0].payload.orders;
		completed = payload[0].payload.completed;
	}

	return (
		<div className="bg-base-100 w-fit h-max p-4 rounded-md border-2 border-base-300 flex gap-4 flex-col">
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
					<span className="material-symbols-outlined scale-125">
						local_shipping
					</span>
				</div>
				<div>
					<h1 className="uppercase text-xs font-medium opacity-50">orders</h1>
					<h1 className="uppercase text-xl font-medium">{orders}</h1>
				</div>
				{showCompleted && (
					<div>
						<h1 className="uppercase text-xs font-medium opacity-50 text-success">
							Completed
						</h1>
						<h1 className="uppercase text-xl font-medium">{completed}</h1>
					</div>
				)}
			</div>
		</div>
	);
}

export default CustomTooltip;
