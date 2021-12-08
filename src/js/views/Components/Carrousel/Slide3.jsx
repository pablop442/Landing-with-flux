//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Images
import Venecia from "../../../../img/Venecia.jpg";

const SlideThree = props => {
	return (
		<div className="carousel-item">
			<img src={Venecia} className="d-block w-100" alt="City image" />
			<div className="carousel-caption d-none d-md-block">
				<h3 className="title">{props.title}</h3>
				<h6 className="text">{props.text}</h6>
			</div>
		</div>
	);
};

SlideThree.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SlideThree;
