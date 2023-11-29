import { ImageData } from "@utils/CrouselImagesData";
import AddImageCard from "./AddImageCard";
import ImageCard from "./ImageCard";

function CrouselImages() {
	return (
		<div className="space-y-6 w-full">
			<div>
				<h1 className="text-4xl font-medium">Crousel Images</h1>
			</div>
			<div className="flex flex-row gap-4 flex-wrap justify-between w-full">
				{ImageData.map((image) => {
					return (
						<ImageCard
							key={image.id}
							imageUrl={image.imageUrl}
							title={image.title}
							category={image.category}
						/>
					);
				})}
				<AddImageCard />
			</div>
		</div>
	);
}

export default CrouselImages;
