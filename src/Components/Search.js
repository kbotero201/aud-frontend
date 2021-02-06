import React, {useState} from "react"

function Search({setLocationSearch}){

    const [search, setSearch] = useState("")

    function handleSubmit(evt){
        evt.preventDefault()
        setLocationSearch(search)
    }

    return(
        <div>
        
        <form onSubmit={handleSubmit}>
            <label 
                htmlFor = 'location'
                arialabel = 'enter address, neighbourhood, city, province or postal code'
                className = 'searchForm__label'> 
                I am looking for Audiologists near
            </label>
            <input 
                type = 'text'
                id = 'location'
                placeholder = 'address, neighbourhood, city, province or postal code'
                value = {search}
                onChange = {(evt) => setSearch(evt.target.value)} >
            </input>
            <button type = 'submit'> Search </button>
        </form>
        
        </div>
    )
}

export default Search