import React from 'react';
import './Series.css';
const Series = () => {
const SERIES = [{
    id : 's1' ,
    image : 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/10161846/SEE-APPLE-TV-2.jpg',
    name:'SEE'
}]
    return (
        <div className="container">
            <div className="item">
                <div className="item_image">
                    <img src={SERIES[0].image} alt={SERIES[0].name} />
                </div>
                <div className="item_info">
                    <h4>{SERIES[0].name}</h4>
                </div>
            </div>
        </div>
    );
}
 
export default Series;