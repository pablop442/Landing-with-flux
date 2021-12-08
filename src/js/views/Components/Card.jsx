//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import Icons
import { FaChevronCircleRight } from "react-icons/fa";

const Card = props => {
	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div className="card text-white mb-4">
				<img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
				<div className="card-img-overlay">
					<h5 className="card-title fs-4">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a
						type="button"
						className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-3 fw-bold fs-4">
						{props.buttonText}
						<FaChevronCircleRight size="28px" className="mb-1 ms-2" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string
};

export default Card;
