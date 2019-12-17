import React from 'react';
import './Movies.css';
const Movies = () => {
const MOVIES = [{
    id : 'm1' ,
    image : 'https://uhdwallpapers.org/uploads/converted/19/12/01/episode-ix-star-wars-the-rise-of-skywalker-1920x1080_788668-lm-90.jpg',
    name:'STAR WARS SKYWALKER'
}]
    return (
        <div className="container">
            <div className="item">
                <div className="item_image">
                    <img src={MOVIES[0].image} alt={MOVIES[0].name} />
                </div>
                <div className="item_info">
                    <h4>{MOVIES[0].name}</h4>
                </div>
            </div>
        </div>
   );
}
 
export default Movies;