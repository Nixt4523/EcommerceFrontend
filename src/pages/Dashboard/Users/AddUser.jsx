import AddUserForm from "@components/Users/AddUserForm";

import Breadcrums from "@components/Breadcrums";
function AddUser() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Add User</h1>
				<Breadcrums />
			</div>
			<div>
				<AddUserForm />
			</div>
		</div>
	);
}

export default AddUser;
