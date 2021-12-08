//Import React
import React from "react";

//Import Images
import logo4Geeks from "../../../img/logo4geeksAzul2.png";

const HeaderTop = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid justify-content-center">
				<a className="navbar-brand" href="#">
					<img src={logo4Geeks} alt="4Geeks Logo" height="45" className="d-inline-block me-3" />
					<span className="align-middle fs-3 text text-primary fw-bolder fst-italic">4Geeks Travel</span>
				</a>
			</div>
		</nav>
	);
};

export default HeaderTop;
