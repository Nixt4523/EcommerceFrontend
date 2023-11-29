import CrouselImages from "@components/Crousel/CrouselImages";
import ImageCrousel from "@components/Crousel/ImageCrousel";
import Breadcrums from "@components/Breadcrums";

function Crousel() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Crousel</h1>
				<Breadcrums />
			</div>
			<div className="w-full h-full space-y-6">
				<div className="h-3/5">
					<ImageCrousel />
				</div>
				<CrouselImages />
			</div>
		</div>
	);
}

export default Crousel;
