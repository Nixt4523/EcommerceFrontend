import EditImageForm from "@components/Crousel/EditImageForm";
import Breadcrums from "@components/Breadcrums";

function EditCrouselImage() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Edit Crousel</h1>
				<Breadcrums />
			</div>
			<div>
				<EditImageForm />
			</div>
		</div>
	);
}

export default EditCrouselImage;
