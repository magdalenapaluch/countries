import React from "react";
import { useParams } from "react-router-dom";
import Country from "../components/Country";

function Countires(props) {
	const params = useParams();

	let continent = props.data.continents.find((obj) => {
		return obj.code === params.code;
	});
	return (
		<div className="countries">
			{continent &&
				continent.countries.map((country) => (
					<Country
						key={country.name}
						name={country.name}
						emoji={country.emoji}
						languages={country.languages}
					></Country>
				))}
		</div>
	);
}

export default Countires;
