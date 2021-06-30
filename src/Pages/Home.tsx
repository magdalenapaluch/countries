import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box";

function Home() {
	return (
		<div className="home">
			<Link to="/continents">
				<Box hoverStyles={true}>Continents</Box>
			</Link>
		</div>
	);
}

export default Home;
