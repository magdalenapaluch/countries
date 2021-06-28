import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Continents from "./Pages/Continents";
import {Route} from 'react-router-dom';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com",
  });
  return (
    <ApolloProvider client={client}>
    <Route path="/continents">
      <Continents/>
    </Route>
    <Route path="/home">
      <Home/>
    </Route>
    </ApolloProvider>
  );
}

export default App;
