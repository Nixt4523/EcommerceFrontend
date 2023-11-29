/* eslint-disable react/prop-types */
function CuponCard({ code, discount }) {
	return (
		<div className="flex items-center justify-between flex-initial w-1/4 h-1/1 flex-grow p-12 rounded-md bg-base-200 border-4 border-base-300">
			<div className="flex flex-col gap-4">
				<h1 className="text-4xl font-bold font-mono uppercase">{code}</h1>
				<h1 className="text-3xl font-medium uppercase">{discount}% OFF</h1>
			</div>
			<div className="p-4 w-fit h-fit bg-success bg-opacity-20 border-4 border-success rounded-full flex items-center justify-center text-success">
				<span className="material-symbols-outlined text-6xl">
					local_activity
				</span>
			</div>
		</div>
	);
}

export default CuponCard;
