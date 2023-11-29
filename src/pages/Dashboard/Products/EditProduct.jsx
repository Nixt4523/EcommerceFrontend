import EditProductForm from "@components/Products/EditProductForm";
import Breadcrums from "@components/Breadcrums";

function EditProduct() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Edit Product</h1>
				<Breadcrums />
			</div>
			<div>
				<EditProductForm />
			</div>
		</div>
	);
}

export default EditProduct;
