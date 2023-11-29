import Breadcrums from "@components/Breadcrums";
import EditOrderForm from "@components/Orders/EditOrderForm";

function EditOrder() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Edit Order</h1>
				<Breadcrums />
			</div>
			<div>
				<EditOrderForm />
			</div>
		</div>
	);
}

export default EditOrder;
