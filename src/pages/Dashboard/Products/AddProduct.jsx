import AddProductForm from "@components/Products/AddProductForm";
import Breadcrums from "@components/Breadcrums";

function AddProduct() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Add Product</h1>
				<Breadcrums />
			</div>
			<div>
				<AddProductForm />
			</div>
		</div>
	);
}

export default AddProduct;
