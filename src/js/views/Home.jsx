//Import React
import React from "react";

//Import Components
import CardContainer from "./Components/CardContainer/CardContainer.jsx";
import Carrousel from "./Components/Carrousel/Carrousel.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import ParallaxContainer from "./Components/ParallaxContainer/ParallaxContainer.jsx";
import BlogCard from "./Components/BlogCard/BlogCard.jsx";

const Home = () => {
	return (
		<div>
			<Carrousel />
			<SearchBar />
			<BlogCard />
			<ParallaxContainer />
			<CardContainer />
		</div>
	);
};

export default Home;
