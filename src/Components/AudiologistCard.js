import React from 'react'

function AudiologistCard({audiologist: {image_url, location, name, display_phone, rating, review_count}}){

    return ( 
        <div className="testcard">
            <div>
                <img src={image_url} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{location.display_address}</p>
                <p>{display_phone}</p>
                <p>{rating}</p>
                <p>Based on {review_count} Reviews</p>
            </div>
        </div>
    )
}

export default AudiologistCard