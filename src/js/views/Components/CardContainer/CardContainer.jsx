//Import React
import React from "react";

//Import Style
import "./CardContainer.scss";

//Import Component
import BestDestinations from "../BestDestinations.jsx";
import SpecialOffers from "../SpecialOffers.jsx";

const CardContainer = () => {
	return (
		<div className="container mt-4">
			<ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active fw-bold"
						id="pills-home-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-home"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true">
						Best Destinations
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link fs-5 fw-bold"
						id="pills-offers-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-offers"
						type="button"
						role="tab"
						aria-controls="pills-offers"
						aria-selected="false">
						Special Offers
					</button>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<BestDestinations />
				<SpecialOffers />
			</div>
		</div>
	);
};
export default CardContainer;
