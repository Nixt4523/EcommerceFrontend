import SaleBanner from "@components/Sale/SaleBanner";
import SaleAnnouncement from "@components/Sale/SaleAnnouncement";
import Breadcrums from "@components/Breadcrums";

function Sale() {
	return (
		<div className="space-y-6 w-full h-full overflow-x-hidden scrollbar scroll-smooth scrollbar-none">
			<div className="flex items-center gap-8">
				<h1 className="text-4xl font-medium">Sale</h1>
				<Breadcrums />
			</div>
			<div className="w-full h-full space-y-6">
				<SaleBanner />
				<SaleAnnouncement />
			</div>
		</div>
	);
}

export default Sale;
