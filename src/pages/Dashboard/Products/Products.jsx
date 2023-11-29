import ProductsTable from "@components/Products/ProductsTable";
import Topbar from "@components/Products/Topbar";
import Breadcrums from "@components/Breadcrums";

function Products() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Products</h1>
				<Breadcrums />
			</div>
			<Topbar />
			<ProductsTable />
		</div>
	);
}

export default Products;
