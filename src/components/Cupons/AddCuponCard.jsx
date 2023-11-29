import { Link } from "react-router-dom";

function AddCuponCard() {
	return (
		<div className="flex items-center justify-between flex-initial w-1/4 h-1/1 flex-grow p-12 rounded-md bg-base-100 border-4 border-dashed border-success">
			<div className="flex flex-col gap-4">
				<h1 className="text-4xl font-bold font-mono uppercase">Add Cupon</h1>
				<Link to={"/admin/cupon/add"}>
					<button className="btn btn-primary rounded-md">
						add <span className="material-symbols-outlined">add</span>
					</button>
				</Link>
			</div>
			<div className="p-4 w-fit h-fit border-4 border-success rounded-full flex items-center justify-center text-success">
				<span className="material-symbols-outlined text-6xl">
					local_activity
				</span>
			</div>
		</div>
	);
}

export default AddCuponCard;
