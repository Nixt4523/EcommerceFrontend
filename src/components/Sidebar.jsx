import { Link, useLocation } from "react-router-dom";

import { SidebarContext } from "@context/SidebarContext";
import { useContext } from "react";
import { chartsData, dashboardData, storeData } from "../utils/SidebarData";

function Sidebar() {
	const location = useLocation();
	const pathName = location.pathname;

	const { state, dispatch } = useContext(SidebarContext);

	function handleClick() {
		dispatch({ type: "toggle" });
	}
	return (
		<div className="w-full flex flex-col gap-1">
			<div className={`flex flex-col ${state.isExpanded && "gap-4"}`}>
				<div className="flex items-center justify-between mb-4">
					{state.isExpanded && (
						<div className="flex items-center gap-4 font-normal text-xl">
							<span className="material-symbols-outlined scale-125">
								admin_panel_settings
							</span>
							<h1>Admin Panel</h1>
						</div>
					)}
					<button
						onClick={handleClick}
						data-tip={state.isExpanded ? "Minimize" : "Maximize"}
						className="btn btn-circle btn-ghost tooltip tooltip-right rounded-md hover:bg-black hover:text-white"
					>
						<span
							className={`material-symbols-outlined ${
								state.isExpanded && "rotate-180"
							}`}
						>
							navigate_next
						</span>
					</button>
				</div>
				<div className="flex flex-col gap-4">
					{state.isExpanded ? (
						<h1 className="font-medium text-sm uppercase opacity-50">
							Dashboard
						</h1>
					) : null}
					<div className="space-y-4">
						{dashboardData.map((item) => {
							return (
								<Link
									key={item.id}
									to={item.link}
									data-tip={item.title}
									className={`flex items-center gap-4 p-2 rounded-md z-50 ${
										item.link === pathName
											? "bg-black text-white hover:bg-black"
											: "hover:bg-base-300"
									} ${
										!state.isExpanded && "btn btn-ghost tooltip tooltip-right"
									}`}
								>
									{item.svg}
									{state.isExpanded ? (
										<h1 className="text-xl">{item.title}</h1>
									) : null}
								</Link>
							);
						})}
					</div>
				</div>
				{!state.isExpanded && <div className="divider"></div>}
				<div className="flex flex-col gap-4">
					{state.isExpanded && (
						<h1 className="font-medium text-sm uppercase opacity-50">charts</h1>
					)}
					<div className="space-y-4">
						{chartsData.map((item) => {
							return (
								<Link
									key={item.id}
									to={item.link}
									data-tip={item.title}
									className={`flex items-center gap-4 p-2 rounded-md z-50 ${
										item.link === pathName
											? "bg-black text-white hover:bg-black"
											: "hover:bg-base-300"
									} ${
										!state.isExpanded && "btn btn-ghost tooltip tooltip-right"
									}`}
								>
									{item.svg}
									{state.isExpanded ? (
										<h1 className="text-xl">{item.title}</h1>
									) : null}
								</Link>
							);
						})}
					</div>
				</div>
				{!state.isExpanded && <div className="divider"></div>}
				<div className="flex flex-col gap-4">
					{state.isExpanded && (
						<h1 className="font-medium text-sm uppercase opacity-50">store</h1>
					)}
					<div className="space-y-4">
						{storeData.map((item) => {
							return (
								<Link
									key={item.id}
									to={item.link}
									data-tip={item.title}
									className={`flex items-center gap-4 p-2 rounded-md z-50 ${
										item.link === pathName
											? "bg-black text-white hover:bg-black"
											: "hover:bg-base-300"
									} ${
										!state.isExpanded && "btn btn-ghost tooltip tooltip-right"
									}`}
								>
									{item.svg}
									{state.isExpanded ? (
										<h1 className="text-xl">{item.title}</h1>
									) : null}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
