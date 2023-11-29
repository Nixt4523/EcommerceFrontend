import { Link } from "react-router-dom";

function AddImageCard() {
	return (
		<div className="basis-1/4 h-1/1 flex-auto border-2 rounded-lg border-dashed p-4 flex flex-col gap-2 items-center justify-center">
			<span className="material-symbols-outlined opacity-50 text-8xl">
				image
			</span>
			<h1 className="text-xl opacity-50 w-1/2 text-center">
				Add an Image to the Crousel
			</h1>
			<Link to={"/admin/crousel/add"}>
				<button className="btn btn-primary rounded-md">
					add <span className="material-symbols-outlined">add</span>
				</button>
			</Link>
		</div>
	);
}

export default AddImageCard;
