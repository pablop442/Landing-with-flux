//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Images
import Maldives from "../../../../img/Maldives.jpg";

const SlideOne = props => {
	return (
		<div className="carousel-item active">
			<img src={Maldives} className="d-block w-100" alt="Maldives beach image" />
			<div className="carousel-caption d-none d-md-block">
				<h3 className="title">{props.title}</h3>
				<h6 className="text">{props.text}</h6>
			</div>
		</div>
	);
};

SlideOne.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SlideOne;
