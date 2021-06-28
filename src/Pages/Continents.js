import React from "react";
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <div className="continents">
        {props.data && props.data.continents.map(continent => <Link key={continent.code} to={`/continents/${continent.code}`}>{continent.code}</Link>)}
    </div>
  );
}

export default Home;
