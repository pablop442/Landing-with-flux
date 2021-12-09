import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home.jsx";
import injectContext from "./store/appContext";

import Navbar from "./views/Components/Navbar/Navbar.jsx";
import Footer from "./views/Components/Footer.jsx";
import HeaderTop from "./views/Components/HeaderTop.jsx";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<HeaderTop />
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
