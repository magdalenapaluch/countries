import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "../graphql/Queries";

function Home() {
  const { loading, error, data} = useQuery(GET_COUNTRIES_QUERY)

  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data);
  }

  return (
    <div className="contintents">
        Continents
    </div>
  );
}

export default Home;
