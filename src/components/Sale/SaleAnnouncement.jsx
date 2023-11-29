import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function SaleAnnouncement() {
	return (
		<div>
			<div className="alert bg-black rounded-lg text-success flex group">
				<div className="flex items-center justify-center w-full gap-4">
					<span className="material-symbols-outlined text-4xl">
						celebration
					</span>
					<span className="text-2xl uppercase font-bold">get up 50% off</span>
					<Link className="underline font-medium text-xl ml-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-200">
						view
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SaleAnnouncement;
