import Topbar from "@components/Users/Topbar";
import UsersTable from "@components/Users/UsersTable";
import Breadcrums from "@components/Breadcrums";

function Users() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Users</h1>
				<Breadcrums />
			</div>
			<Topbar />
			<UsersTable />
		</div>
	);
}

export default Users;
