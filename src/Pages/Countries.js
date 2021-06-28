import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "../graphql/Queries";
import {Link} from 'react-router-dom'

function Countires() {
  const { loading, error, data} = useQuery(GET_COUNTRIES_QUERY)

  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data.continents);
  }

  return (
    <div className="continents">
        {data && data.continents.map(continent => <Link key={continent.code} to={`/continents/${continent.code}`}>{continent.code}</Link>)}
    </div>
  );
}

export default Countires;
