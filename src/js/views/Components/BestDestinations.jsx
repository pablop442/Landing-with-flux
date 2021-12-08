//Import React
import React from "react";

//Import Component
import Card from "./Card.jsx";

//Import Images
import andorra from "../../../img/AndorraOk.jpg";
import london from "../../../img/LondonOk.jpg";
import newDelhi from "../../../img/NewDelhiOk.jpg";
import newYork from "../../../img/NewYorkOk.jpg";
import paris from "../../../img/ParisOk.jpg";
import porto from "../../../img/PortoOk.jpg";

const BestDestinations = () => {
	return (
		<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
			<div className="row">
				<Card imgSrc={newYork} imgAlt="New York" title="New York" text="Flight from Madrid" buttonText="390€" />
				<Card imgSrc={andorra} imgAlt="Andorra" title="Andorra" text="5 days and 3 nights" buttonText="299€" />
				<Card
					imgSrc={newDelhi}
					imgAlt="Taj Mahal"
					title="New Delhi"
					text="Flight + 7 days and 5 nights"
					buttonText="799€"
				/>
				<Card
					imgSrc={porto}
					imgAlt="Porto Portugal"
					title="Porto"
					text="5 days and 3 nights"
					buttonText="249€ "
				/>
				<Card
					imgSrc={london}
					imgAlt="Westminster Palace"
					title="London"
					text="4 days and 2 nights"
					buttonText="199€ "
				/>
				<Card
					imgSrc={paris}
					imgAlt="Eiffel Tower"
					title="Paris"
					text="4 days and 2 nights"
					buttonText="199€ "
				/>
			</div>
		</div>
	);
};
export default BestDestinations;
