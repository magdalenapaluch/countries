import React from "react";
import { CountryType } from "../models/data";
import Box from "../components/Box";

const Country: React.FC<{ country: CountryType }> = (props) => {
	return (
		<Box hoverStyles={false}>
			{props.country.name && <p>{props.country.name}</p>}
			{props.country.emoji &&<p>{props.country.emoji}</p>}
			{props.country.languages[0] ? <p>{props.country.languages[0].name}</p> : <p>N/A</p>}
		</Box>
	);
}

export default Country;
