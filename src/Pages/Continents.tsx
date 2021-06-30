import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../models/data";

const Continents: React.FC<{ data: Data }> = (props) => {
	return (
		<div className="continents">
			{props.data &&
				props.data.continents.map((continent) => (
					<Link
						key={continent.code}
						to={`/continents/${continent.code}`}
						className="continent box"
					>
						<p>{continent.name}</p>
						<p>{continent.code}</p>
					</Link>
				))}
		</div>
	);
};

export default Continents;
