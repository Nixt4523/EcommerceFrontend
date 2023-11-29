import { ImageData } from "@utils/CrouselImagesData";

function ImageCrousel() {
	return (
		<div className="carousel w-full h-full rounded-md">
			{ImageData.map((image) => {
				return (
					<div key={image.id} className="carousel-item relative w-full">
						<div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent bg-opacity-50 from-10% to-70%"></div>
						<img src={image.imageUrl} className="w-full h-full object-cover" />
						<div className="absolute top-1/2 -translate-y-1/2 left-20 flex flex-col items-start justify-center">
							<h1 className="text-6xl tracking-widest font-bold text-transparent font-outline-2 uppercase">
								{image.category}
							</h1>
							<h1 className="text-7xl text-white font-normal w-2/3">
								{image.title}
							</h1>
							<button className="btn mt-4 rounded-md space-x-2">
								<h1>view</h1>
								<span className="material-symbols-outlined">trending_flat</span>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ImageCrousel;
