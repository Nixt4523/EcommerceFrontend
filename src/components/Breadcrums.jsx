import { useLocation } from "react-router-dom";

function Breadcrums() {
	const location = useLocation();
	const pathnames = location.pathname.split("/");

	return (
		<div>
			<div className="text-sm breadcrumbs capitalize">
				<ul>
					{pathnames.map((path) => {
						if (path !== "/") {
							return <li key={path}>{path}</li>;
						}
					})}
				</ul>
			</div>
		</div>
	);
}
export default Breadcrums;
