import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
       <Fragment>
            <div className="center">
            <h1>Welcome to the IMDB HomePage</h1>
            <Link to="/movies">MOVIES</Link>
               <br></br>
            <Link to="/series">SERIES</Link>
            </div>
       </Fragment>
    );
}
 
export default Home;