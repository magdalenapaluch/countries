import React from "react";
import { CountryType } from "../models/data";

const Country: React.FC<{ country: CountryType }> = (props) => {
	return (
		<div className="country box">
			{props.country.name && <p>{props.country.name}</p>}
			{props.country.emoji &&<p>{props.country.emoji}</p>}
			{props.country.languages[0] ? <p>{props.country.languages[0].name}</p> : <p>N/A</p>}
		</div>
	);
}

export default Country;
