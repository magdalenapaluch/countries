import React from "react";
import './Country.css'

function Country(props) {
	return (
		<div className="country box">
			{props.name && <span className="box__item">{props.name}</span>}
			{props.emoji &&<span className="box__item">{props.emoji}</span>}
			{props.languages[0] ? <span className="box__item">{props.languages[0].name}</span> : <span className="box__item">N/A</span>}
		</div>
	);
}

export default Country;
