import EditSaleForm from "@components/Sale/EditSaleForm";
import Breadcrums from "@components/Breadcrums";

function EditSale() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Edit Sale</h1>
				<Breadcrums />
			</div>
			<div>
				<EditSaleForm />
			</div>
		</div>
	);
}

export default EditSale;
