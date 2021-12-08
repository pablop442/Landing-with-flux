//Import React
import React from "react";

//Import Component
import Card from "./Card.jsx";

//Import images
import amsterdam from "../../../img/AmsterdamOk.jpg";
import berlin from "../../../img/BerlinOk.jpg";
import bilbao from "../../../img/BilbaoOk.jpg";
import malaga from "../../../img/MalagaOk.jpg";
import rome from "../../../img/RomeOk.jpg";
import seville from "../../../img/SevilleOk.jpg";

const SpecialOffers = () => {
	return (
		<div className="tab-pane fade" id="pills-offers" role="tabpanel" aria-labelledby="pills-offers-tab">
			<div className="row">
				<Card
					imgSrc={amsterdam}
					imgAlt="Amsterdam"
					title="Amsterdam"
					text="3 days and 2 nights"
					buttonText="99€"
				/>
				<Card
					imgSrc={malaga}
					imgAlt="Malaga"
					title="Malaga"
					text="5 days with Manu - All inclusive"
					buttonText="49€ "
				/>
				<Card
					imgSrc={rome}
					imgAlt="Rome Colosseum"
					title="Rome"
					text="3 Nights - Five Stars Hotel"
					buttonText="249€ "
				/>
				<Card imgSrc={seville} imgAlt="Seville" title="Seville" text="3 days and 2 nights" buttonText="79€ " />
				<Card
					imgSrc={berlin}
					imgAlt="Brandenburg gate"
					title="Berlin"
					text="5 days and 3 nights"
					buttonText="239€ "
				/>
				<Card
					imgSrc={bilbao}
					imgAlt="Guggenheim Museum"
					title="Bilbao"
					text="3 days and 2 nights"
					buttonText="149€ "
				/>
			</div>
		</div>
	);
};
export default SpecialOffers;
