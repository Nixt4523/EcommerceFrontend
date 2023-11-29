import { ProductData } from "@utils/ProductsData";
import { Link } from "react-router-dom";

function UsersTable() {
	return (
		<div className="overflow-x-auto h-fit scrollbar">
			<table className="table table-lg table-pin-rows">
				<thead>
					<tr className="bg-base-200 uppercase">
						<th>Image</th>
						<th>Title</th>
						<th>Description</th>
						<th>Color</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ProductData.map((product) => {
						return (
							<tr
								key={product.title}
								className="hover:bg-base-300 transition-colors"
							>
								<td className="w-fit">
									<div className="mask mask-squircle w-24 h-24">
										<img
											src={product.image}
											alt=""
											className="w-24 h-24 object-cover"
										/>
									</div>
								</td>
								<td>
									<h1>{product.title}</h1>
								</td>
								<td className="w-auto">
									<h1 className="w-1/2">{product.description}</h1>
								</td>
								<td>
									<h1 className="capitalize">{product.color}</h1>
								</td>
								<td>
									<h1>{product.price}₹</h1>
								</td>
								<td>
									<div className="flex gap-4 items-center">
										<Link to={"/admin/products/edit"}>
											<button className="btn btn-circle hover:btn-info transition-colors hover:text-info-content">
												<span className="material-symbols-outlined">edit</span>
											</button>
										</Link>
										<button className="btn btn-circle hover:btn-warning transition-colors hover:text-warning-content">
											<span className="material-symbols-outlined">delete</span>
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default UsersTable;
