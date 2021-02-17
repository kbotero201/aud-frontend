import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AudiologistCard from "../Components/AudiologistCard.js"
import Search from "../Components/Search.js"
import Loading from "../Components/Loading.js"


function AudiologistList(){

    const [list, setList]= useState([])
    const [locationSearch, setLocationSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const listMapped = list.map((audiologist) => (
        <AudiologistCard audiologist={audiologist} key={audiologist.id} />
    ))

    useEffect(()=> {
        const initialLocation = "New York"
        fetchAudiologists(initialLocation)
    },[])

    useEffect(()=> {
        fetchAudiologists(locationSearch)
    },[locationSearch])

    function fetchAudiologists(location){
        setIsLoading(true)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            params: {
                categories: 'audiologist',
            }
            })
            .then((res) => {
                setList(res.data.businesses)
                setIsLoading(false)
            })
    }

    return(
        <div>
            <Search setLocationSearch={setLocationSearch} />
            {isLoading? <Loading /> : <div>{listMapped}</div> }
        </div>
    )
}

export default AudiologistList