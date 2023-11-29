import AddCuponForm from "@components/Cupons/AddCuponForm";
import Breadcrums from "@components/Breadcrums";

function AddCupon() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Add Cupon</h1>
				<Breadcrums />
			</div>
			<div>
				<AddCuponForm />
			</div>
		</div>
	);
}

export default AddCupon;
