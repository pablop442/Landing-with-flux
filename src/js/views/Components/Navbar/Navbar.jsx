//Import React
import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#">
								Vacations
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#">
								Offers
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#">
								All inclusive
							</a>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Flights, hotels, more..."
							aria-label="Search"
						/>
						<button className="btn btn-info text-nowrap" type="submit">
							Take me
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
