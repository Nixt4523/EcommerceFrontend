import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ImageCard({ imageUrl, title, category }) {
	return (
		<div className="basis-1/4 flex-auto space-y-4 p-4 border-2 rounded-lg">
			<div>
				<img src={imageUrl} alt="" className="rounded-md object-cover w-fit" />
			</div>
			<div className="flex items-start justify-between gap-2">
				<div className="flex-1">
					<h1 className="font-normal text-2xl">{title}</h1>
					<h1 className="font-medium uppercase">{category}</h1>
				</div>
				<div className="flex  gap-2">
					<Link to={"/admin/crousel/edit"}>
						<button className="btn btn-circle hover:btn-info transition-colors hover:text-info-content">
							<span className="material-symbols-outlined">edit</span>
						</button>
					</Link>
					<button className="btn btn-circle hover:btn-warning transition-colors hover:text-warning-content">
						<span className="material-symbols-outlined">delete</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageCard;
