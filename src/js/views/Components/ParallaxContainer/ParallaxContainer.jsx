//Import React
import React from "react";

//Import Style
import "./ParallaxContainer.scss";

//Import Parallax
import { Parallax } from "react-parallax";

//Import Images
import discover from "../../../../img/discoverTheWorldBlue.jpg";

const ParallaxContainer = () => (
	<div className="container">
		<div className="col-12">
			<Parallax blur={{ min: -15, max: 15 }} bgImage={discover} bgImageAlt="Discover the World" strength={400}>
				<div className="text-white d-flex justify-content-center align-items-center parallaxCont">
					#discoverTheWorld
				</div>
			</Parallax>
		</div>
	</div>
);
export default ParallaxContainer;
