import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../models/data";

const Continents: React.FC<{ data: Data }> = (props) => {
	console.log(props.data.continents)
	return (
		
		<div className="continents">
			{props.data &&
				props.data.continents.map((continent) => (
					<Link
						key={continent.code}
						to={`/continents/${continent.code}`}
						className="continent box"
					>
						<span className="box__item">{continent.code}</span>
						<span className="box__item">{continent.name}</span>
					</Link>
				))}
		</div>
	);
}

export default Continents;
