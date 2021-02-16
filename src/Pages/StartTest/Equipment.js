import React from 'react'
import EquipmentCard from "./EquipmentCard.js"

function Equipment({setStartStep, setEquipment}){

    const equipmentData = [
        {
            title: "Over Ear Headphones",
            suggestion: "(reccomended)",
            image: "./Images/test.jpg",
            moreList: ["✔️ Bluetooth", "✔️ Wired"]
        },
        {
            title: "Bud Earphones",
            suggestion: "(acceptable)",
            image: "./Images/test.jpg",
            moreList: ["✔️ Bluetooth", "✔️ Wired"]
        },
        {
            title: "Computer Audio",
            suggestion: "(not suggested)",
            image: "./Images/test.jpg",
            moreList: ["❌ External Audio", "❌ Computer Audio"]
        }
    ]

    const equipmentList = equipmentData.map((card) => (
        <EquipmentCard data={card} setEquipment={setEquipment} />
    ))


    function handleNextClick(){
        setStartStep(2)
    }

    
    return(
        <div>

            <h1 className="header"> Let's Make Sure You Have The Right Equipment</h1>
            <div className="equipment-flex" >
                {equipmentList}
            </div>
            <button className="large-button" onClick={handleNextClick}> Next </button>

        </div>
    )
}

export default Equipment 