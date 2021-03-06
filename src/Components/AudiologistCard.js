import React from 'react'

function AudiologistCard({audiologist: {image_url, location, name, display_phone, rating, review_count, url}}){


    let string = location.display_address.toString()
    const formattedLocation = `https://www.google.com/maps/search/${string.split(",").join("+").split(" ").join("+")}`

    function handleCardClick(){
        window.open(url)
    }

    return ( 
        <div className="audiocard">
            <div>
                <img src={image_url} alt={name} className="cover-photo"/>
            </div>
            <div>
                <div onClick={handleCardClick}>
                    <h3>{name}</h3>
                    <p>{location.display_address}</p>
                    <p>{display_phone}</p>
                    <img src= {`../Images/yelp_stars/${rating}.png`} alt={rating} className="ratings" />
                    <img src= "../Images/yelp_logo.png" alt="Yelp Logo" className="yelp-logo"/>
                    <p>Based on {review_count} Reviews</p>
                </div>
                <div>
                    <a href={formattedLocation}>Get Directions</a>
                </div>
            </div>
        </div>
    )
}

export default AudiologistCard