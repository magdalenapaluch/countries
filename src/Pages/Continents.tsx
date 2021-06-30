import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../models/data";
import Box from "../components/Box";
import FlexContainer from "../components/FlexContainer";

const Continents: React.FC<{ data: Data }> = (props) => {
	return (
		<FlexContainer>
			{props.data &&
				props.data.continents.map((continent) => (
					<Link
						key={continent.code}
						to={`/continents/${continent.code}`}
						className="continent"
					>
						<Box hoverStyles={true}>
							<p>{continent.name}</p>
							<p>{continent.code}</p>
						</Box>
					</Link>
				))}
		</FlexContainer>
	);
};

export default Continents;
