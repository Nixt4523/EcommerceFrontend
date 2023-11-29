import AddImageForm from "@components/Crousel/AddImageForm";
import Breadcrums from "@components/Breadcrums";

function AddCrouselImage() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Add Crousel</h1>
				<Breadcrums />
			</div>
			<div>
				<AddImageForm />
			</div>
		</div>
	);
}

export default AddCrouselImage;
