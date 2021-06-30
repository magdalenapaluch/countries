import React from "react";
import { useParams } from "react-router-dom";
import Country from "../components/Country";
import { Data } from "../models/data";

const Countires: React.FC<{ data: Data }> = (props) => {
	const params: {code: string} = useParams();

	let continent = props.data.continents.find((obj) => {
		return obj.code === params.code;
	});
	return (
		<div className="countries">
			{continent &&
				continent.countries.map((country) => (
					<Country key={country.name} country={country}></Country>
				))}
		</div>
	);
};

export default Countires;
