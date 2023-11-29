function Topbar() {
	return (
		<div>
			<div className="flex gap-4 items-center w-full justify-between">
				<div className="flex flex-row gap-4 items-center">
					<button className="btn rounded-md">
						Filters
						<span>
							<span className="material-symbols-outlined">filter_alt</span>
						</span>
					</button>
					<button className="btn rounded-md">
						Sort
						<span>
							<span className="material-symbols-outlined">sort</span>
						</span>
					</button>
				</div>
				<div className="flex-1 flex gap-2">
					<input
						type="text"
						placeholder="Search for orders..."
						className="input input-bordered rounded-md w-full focus:outline-primary"
					/>
					<button className="btn rounded-md">
						Search
						<span>
							<span className="material-symbols-outlined">search</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
