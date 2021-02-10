import React from 'react'

function AudiologistCard({audiologist: {image_url, location, name, display_phone, rating, review_count}}){

    return ( 
        <div className="audiocard">
            <div>
                <img src={image_url} alt={name} className="cover-photo"/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{location.display_address}</p>
                <p>{display_phone}</p>
                <img src= {`../Images/yelp_stars/${rating}.png`} alt={rating} className="ratings" />
                <img src= "../Images/yelp_logo.png" alt="Yelp Logo" className="yelp-logo"/>
                <p>Based on {review_count} Reviews</p>
            </div>
        </div>
    )
}

export default AudiologistCard