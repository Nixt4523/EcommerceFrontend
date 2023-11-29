import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex p-4 items-center justify-between border-b-2 bg-base-100">
			<div className="relative w-max">
				<Link to={"/admin"} className="group">
					<span className="bg-gradient-to-r from-primary to-accent w-4 h-1 absolute top-0 left-0 animate-logoAnimation group-hover:w-full duration-200"></span>
					<h1 className="text-2xl font-bold">AURA</h1>
				</Link>
			</div>
			<div>
				<div className="avatar placeholder">
					<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
						<span className="text-base">NT</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
