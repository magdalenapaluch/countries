import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import Continents from "./Pages/Continents";
import Countries from "./Pages/Countries";
import {Route} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "./graphql/Queries";


function App() {
  
type  data = Object;
const { loading, error, data} = useQuery(GET_COUNTRIES_QUERY);
  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data.continents);
  }
  return (<>
    <Route path="/continents">
      <Continents data={data}/>
    </Route>
    <Route path="/home">
      {data && <Home/>}
    </Route>
    {/* <Route path="/continents/:code">
      {data && <Countries data={data}/>}
    </Route> */}
    </>
  );
}

export default App;
