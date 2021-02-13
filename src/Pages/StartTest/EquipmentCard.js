import React, {useState} from 'react'

function EquipmentCard({data: {title, suggestion, image, moreList}}){

    const [showMore, setShowMore] = useState(false)

    function handleCardClick(){
        setShowMore((showMore) => !showMore)
    }

    const listItems = moreList.map((item) => (
        <li> {item} </li>
    ))

    console.log(moreList)
    
    return(
        <div>
                <div className="equipment-item" >
                    <img src={image} className={title}></img>
                    <h3>{title}</h3>
                    <p>{suggestion}</p>
                    <div onClick={handleCardClick}> <img className="icon" src={showMore? "./Images/arrow-up.png" : "./Images/arrow-down.png"} /> </div>
                    {showMore? <ul>{listItems}</ul> : null}
                </div>
        </div>
    )
}

export default EquipmentCard