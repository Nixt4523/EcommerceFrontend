import { OrdersData } from "@utils/OrdersData";
import { Link } from "react-router-dom";

function OrdersTable() {
	return (
		<div className="overflow-x-auto h-fit scrollbar">
			<table className="table table-lg table-pin-rows">
				<thead>
					<tr className="bg-base-200 uppercase">
						<th>Id</th>
						<th>Recipient</th>
						<th>Total Products</th>
						<th>Dilevery Address</th>
						<th>Amout</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{OrdersData.map((order) => {
						return (
							<tr key={order} className="hover:bg-base-300 transition-colors">
								<td>
									<h1 className="opacity-50">{order.id}</h1>
								</td>
								<td>
									<h1>{order.recipient}</h1>
								</td>
								<td>
									<h1>{order.totalProducts}</h1>
								</td>
								<td>
									<h1 className="w-1/2">{order.dileveryAddress}</h1>
								</td>
								<td>
									<h1>{order.amount}₹</h1>
								</td>
								<td>
									<div className="badge badge-info badge-lg">
										<h1 className="text-sm uppercase text-info-content font-medium">
											{order.status}
										</h1>
									</div>
								</td>
								<td>
									<div className="flex gap-4 items-center">
										<Link to={"/admin/orders/edit"}>
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

export default OrdersTable;
