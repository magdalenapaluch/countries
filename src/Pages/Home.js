import React from "react";
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="home">
      <Link to="/continents">Continents</Link>
    </div>
  );
}

export default Home;