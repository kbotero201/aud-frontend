import React, {useState} from 'react'
import TestList from "../TestList.js"

function UserProfile({currentUser}){

    {currentUser.user_tests ? console.log("yes") : console.log("no")}

    console.log(currentUser)

    const array = currentUser.user_tests
    console.log(array)


    //const testList = currentUser.user_tests.map((test) => {
    //    console.log(test)
    //})
    
    return(
        <div>
            <h1> Profile Page </h1>
            <h1> Name: {currentUser.name}  </h1>
            <h1> Age: {currentUser.age}  </h1>
            
        </div>
    )
}

export default UserProfile

