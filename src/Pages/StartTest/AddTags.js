import React, {useState} from 'react'

function AddTags({setStartStep, tags, setTags}){

    const [value, setValue] = useState("")

    function inputKeyDown(e){
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            setTags([...tags, val])
            setValue("")
            console.log(tags)
        }
    }

    const displayTags = tags.map((tag) => (
        <li key={tag}> {tag} <button id={tag} onClick={removeTag} type="button"> X </button></li> 
    ))

    function removeTag(evt){
        const oldTags = [ ...tags ]
        const newTags = oldTags.filter((tag) => tag !== evt.target.id)
        setTags(newTags)
    }

    function handleNextClick(){
        setStartStep(3)
    }
    
    return(
        <div>
            <h1 className="header"> Add Notes? </h1>
            <p> Add & remove tags to make sense of this test in the future </p>
            <div className="input-tag">
                    <ul className="input-tag__tags">
                        {displayTags}
                        <li className="input-tag__tags__input">
                            <input 
                                type="text" 
                                onKeyDown={inputKeyDown}
                                value={value}
                                onChange={(e)=> setValue(e.target.value)}
                                placeholder="Type here..."
                            />
                        </li>
                    </ul>
            </div>
            <div className="flex-container">
                <button className="alt-large-button" > Skip </button>
                <button className="large-button" onClick={handleNextClick}> Save </button>
            </div>
        </div>
    )
}

export default AddTags