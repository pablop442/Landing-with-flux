//Import React
import React from "react";

//Import Icons
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
	const iconStyles = {
		color: "grey",
		marginLeft: "3px",
		marginRight: "3px",
		fontSize: "25px"
	};
	return (
		<div>
			<footer className="bg-secondary bg-opacity-25 container py-4 ">
				<div className="row">
					<div className="col-4" />
					<div className="col-4 text-center ">© 2021 Copyright: All rights reserved.</div>
					<div className="col-4 text-center">
						Contact us: <BsFacebook style={iconStyles} /> <BsInstagram style={iconStyles} />{" "}
						<BsTwitter style={iconStyles} />{" "}
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
