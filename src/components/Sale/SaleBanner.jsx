import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function SaleBanner() {
	return (
		<div className="w-full h-3/5 relative overflow-hidden p-8 border-4 border-base-300 bg-success bg-opacity-0 rounded-lg flex justify-between items-center group">
			<div className="w-full h-auto bg-base-300 rounded-t-lg z-10 p-4 absolute bottom-0 left-1/2 flex items-center justify-center gap-4 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300 delay-500">
				<Link to={"/admin/sale/edit"}>
					<button className="btn btn-circle hover:btn-info transition-colors hover:text-info-content">
						<span className="material-symbols-outlined">edit</span>
					</button>
				</Link>
				<button className="btn btn-circle hover:btn-warning transition-colors hover:text-warning-content">
					<span className="material-symbols-outlined">delete</span>
				</button>
			</div>
			<div className="flex relative flex-col justify-center gap-6">
				<div className="flex gap-2 items-center">
					<span className="badge badge-success badge-lg uppercase p-4 font-medium text-white">
						active
					</span>
					<span className="badge badge-warning badge-lg uppercase p-4 font-medium text-white">
						unactive
					</span>
				</div>
				<h1 className="text-6xl font-bold">Winter's Arc Sale ⛄</h1>
				<div className="space-y-4 mb-4">
					<h1 className="text-4xl font-semibold uppercase text-success">
						Get upto 50% off
					</h1>
					<p className="text-2xl w-3/4 opacity-50">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
						facere debitis optio? Quos ipsum suscipit fugiat maiores inventore
						voluptatum omnis nihil distinctio soluta deleniti ipsam similique
						vel, porro facere provident?
					</p>
				</div>
				<button className="btn btn-primary rounded-md space-x-2 w-1/4">
					<h1>view</h1>
					<span className="material-symbols-outlined">trending_flat</span>
				</button>
			</div>
			<div className="flex w-1/2 items-center justify-start h-full">
				<span className="material-symbols-outlined text-[300px] text-success">
					celebration
				</span>
			</div>
		</div>
	);
}

export default SaleBanner;
