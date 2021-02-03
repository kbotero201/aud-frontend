import React, {useState} from 'react'
import TestList from "../TestList.js"

function UserProfile({currentUser}){

  

    console.log(currentUser)
    
    return(
        <div>
            <h1> Profile Page </h1>
            <h1> {currentUser.name}  </h1>
            <h1> {currentUser.name}  </h1>
            
        </div>
    )
}

export default UserProfile

