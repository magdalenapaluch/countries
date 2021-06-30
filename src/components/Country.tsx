import React from "react";
import { CountryType } from "../models/data";

const Country: React.FC<{ country: CountryType }> = (props) => {
	return (
		<div className="country box">
			{props.country.name && <span className="box__item">{props.country.name}</span>}
			{props.country.emoji &&<span className="box__item">{props.country.emoji}</span>}
			{props.country.languages[0] ? <span className="box__item">{props.country.languages[0].name}</span> : <span className="box__item">N/A</span>}
		</div>
	);
}

export default Country;
