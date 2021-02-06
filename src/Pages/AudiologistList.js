import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AudiologistCard from "../Components/AudiologistCard.js"
import Search from "../Components/Search.js"


function AudiologistList(){

    const [list, setList]= useState([])
    const [locationSearch, setLocationSearch] = useState("Alabama")

    useEffect(()=> {
        const initialLocation = "New York"
        fetchAudiologists(initialLocation)
    },[])

    useEffect(()=> {
        fetchAudiologists(locationSearch)
    },[locationSearch])

    function fetchAudiologists(location){
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            params: {
                categories: 'audiologist',
            }
            })
            .then((res) => {
                //console.log(res.data.businesses)
                //change the state of App to reflect on the result we are given from the API
                //at the same time, setting the loading state to false 
                setList(res.data.businesses)
            })
            .catch((err) => {
                //fire the errorState message if there is no information return from the API
                console.log("ERROR")
            })
    }


    const listMapped = list.map((audiologist) => (
        <AudiologistCard audiologist={audiologist} key={audiologist.id} />
    ))


    return(
        <div>
            <Search setLocationSearch={setLocationSearch} />
            {listMapped}
        </div>
    )
}

export default AudiologistList