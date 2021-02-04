import React, {useState, useEffect} from 'react'
import UserTestCard from "../UserTestCard.js"

function UserProfile({currentUser}){

    const [testList, setTestList] = useState([])

    {currentUser.user_tests ? console.log("yes") : console.log("no")}



    
    useEffect(() => {
        if (currentUser.user_tests){
            let testsMapped= currentUser.user_tests.map((test) => {
                console.log(test)
                return <UserTestCard test={test} key={test.id} />   
            })
            setTestList(testsMapped)
        }
    },[])


    
    return(
        <div>
            <h1> Profile Page </h1>
            <h1> Name: {currentUser.name}  </h1>
            <h1> Age: {currentUser.age}  </h1>
            {testList}
            
        </div>
    )
}

export default UserProfile

