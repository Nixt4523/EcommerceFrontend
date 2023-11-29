import AllCupons from "@components/Cupons/AllCupons";
import Breadcrums from "@components/Breadcrums";

function Cupon() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Cupon</h1>
				<Breadcrums />
			</div>
			<div className="w-full h-full space-y-6">
				<AllCupons />
			</div>
		</div>
	);
}

export default Cupon;
