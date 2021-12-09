//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Images
import Swiss from "../../../../img/Swiss.jpg";

const SlideTwo = props => {
	return (
		<div className="carousel-item">
			<img src={Swiss} className="d-block w-100" alt="Mountain image" />
			<div className="carousel-caption d-none d-md-block">
				<h3 className="title">{props.title}</h3>
				<h6 className="text">{props.text}</h6>
			</div>
		</div>
	);
};
SlideTwo.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SlideTwo;
