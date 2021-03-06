import React, {useState} from 'react'

function EquipmentCard({data: {title, suggestion, image, moreList}, setEquipment}){

    const [showMore, setShowMore] = useState(false)

    function handleCardClick(){
        setShowMore((showMore) => !showMore)
    }

    function handleSelectedClick(){
        setEquipment("Using " + title)
    }

    const listItems = moreList.map((item) => (
        <li key={item}> {item} </li>
    ))

    return(
        <div>
                <div onClick={handleSelectedClick} className="equipment-item" >
                    <img src={image} alt={title}></img>
                    <h3>{title}</h3>
                    <p>{suggestion}</p>
                    <div onClick={handleCardClick}> <img className="icon" src={showMore? "./Images/arrow-up.png" : "./Images/arrow-down.png"} alt="Arrow" /> </div>
                    {showMore? <ul className="list" >{listItems}</ul> : null}
                </div>
        </div>
    )
}

export default EquipmentCard