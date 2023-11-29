import EditUserForm from "@components/Users/EditUserForm";
import Breadcrums from "@components/Breadcrums";

function EditUser() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Edit User</h1>
				<Breadcrums />
			</div>
			<div>
				<EditUserForm />
			</div>
		</div>
	);
}

export default EditUser;
