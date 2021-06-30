import React from "react";
import Home from "./Pages/Home";
import Continents from "./Pages/Continents";
import Countries from "./Pages/Countries";
import { Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "./graphql/Queries";

function App() {
	const { error, data } = useQuery(GET_COUNTRIES_QUERY);
	if (error) return <h1> Error found</h1>;
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/continents" exact>
				{data && <Continents data={data} />}
			</Route>
			<Route path="/continents/:code">
				{data && <Countries data={data} />}
			</Route>
		</Switch>
	);
}

export default App;
