//Import React
import React from "react";

//Import Components
import CardContainer from "./Components/CardContainer/CardContainer.jsx";
import Carrousel from "./Components/Carrousel/Carrousel.jsx";
import HeaderTop from "./Components/HeaderTop.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import Footer from "./Components/Footer.jsx";
import ParallaxContainer from "./Components/ParallaxContainer/ParallaxContainer.jsx";
import BlogCard from "./Components/BlogCard/BlogCard.jsx";

const Home = () => {
	return (
		<div>
			<HeaderTop />
			<Navbar />
			<Carrousel />
			<SearchBar />
			<BlogCard />
			<ParallaxContainer />
			<CardContainer />
			<Footer />
		</div>
	);
};

export default Home;
