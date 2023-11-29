import { UsersData } from "@utils/UsersData";
import { Link } from "react-router-dom";

function UsersTable() {
	return (
		<div className="overflow-x-auto h-fit scrollbar">
			<table className="table table-lg table-pin-rows">
				<thead>
					<tr className="bg-base-200 uppercase">
						<th>Profile</th>
						<th>Name</th>
						<th>Email</th>
						<th>Account Type</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{UsersData.map((users) => {
						return (
							<tr
								key={users.username}
								className="hover:bg-base-300 transition-colors"
							>
								<td>
									<div className="avatar placeholder">
										<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
											<span className="text-base">
												{users.username.charAt(0) +
													users.username.split(" ")[1][0]}
											</span>
										</div>
									</div>
								</td>
								<td>
									<div className="flex flex-row items-center space-x-3">
										<div>
											<h1 className="">{users.username}</h1>
										</div>
									</div>
								</td>
								<td>
									<h1>{users.email}</h1>
								</td>
								<td>
									{users.isAdmin ? (
										<div className="badge badge-success badge-lg">
											<h1 className="text-sm uppercase text-success-content font-medium">
												Admin
											</h1>
										</div>
									) : (
										<div className="badge badge-info badge-lg">
											<h1 className="text-sm uppercase text-info-content font-medium">
												User
											</h1>
										</div>
									)}
								</td>
								<td className="flex gap-4 items-center">
									<Link to={"/admin/users/edit"}>
										<button className="btn btn-circle hover:btn-info transition-colors hover:text-info-content">
											<span className="material-symbols-outlined">edit</span>
										</button>
									</Link>
									<button className="btn btn-circle hover:btn-warning transition-colors hover:text-warning-content">
										<span className="material-symbols-outlined">delete</span>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default UsersTable;
