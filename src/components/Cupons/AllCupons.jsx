import { CuponData } from "@utils/CuponsData";
import AddCuponCard from "./AddCuponCard";
import CuponCard from "./CuponCard";

function AllCupons() {
	return (
		<div className="flex items-center justify-between flex-wrap gap-4">
			{CuponData.map((cupon) => {
				return (
					<CuponCard
						key={cupon.id}
						code={cupon.code}
						discount={cupon.discount}
					/>
				);
			})}
			<AddCuponCard />
		</div>
	);
}

export default AllCupons;
