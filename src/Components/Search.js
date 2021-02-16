import React, {useState} from "react"

function Search({setLocationSearch}){

    const [search, setSearch] = useState("")

    function handleSubmit(evt){
        evt.preventDefault()
        setLocationSearch(search)
    }

    return(
        <div className="search">
            <form onSubmit={handleSubmit}>
                <label 
                    htmlFor = 'location'
                    arialabel = 'enter address, neighbourhood, city, province or postal code'
                    className = 'searchForm__label'> 
                    <span className="name"> I am looking for an Audiologist near </span>
                </label>
                <input 
                    className="search-input"
                    type = 'text'
                    id = 'location'
                    placeholder = 'address, neighbourhood, city, province or postal code'
                    value = {search}
                    onChange = {(evt) => setSearch(evt.target.value)} >
                </input>
                <button className="search-button" type ="submit"> <img src="./Images/search-icon.png" alt="Search" /> </button>
            </form>
        </div>
    )
}

export default Search