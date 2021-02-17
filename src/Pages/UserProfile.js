import React, {useEffect, useState} from 'react'
import UserTestCard from "../Components/UserTestCard.js"


function UserProfile({currentUser, reloadCurrentUser, setCurrentUser}){

    useEffect(() => {
        reloadCurrentUser(currentUser)
    },[])
   
    let testMapped 
    if (currentUser.user_tests){
        testMapped = currentUser.user_tests.map((test) => (
         <UserTestCard 
            test={test} 
            key={test.id}  
            handleDeletedTest={handleDeletedTest} />   
        )) 
    }

    function handleDeletedTest(testId){
        let updatedTestList = currentUser.user_tests.filter(
            (test) => test.id !== testId
        )
        setCurrentUser({
            ...currentUser, 
            user_tests: updatedTestList
        })
    }


    return(
        <div>
            <div className="container">
                <div className="solid"></div>
                <div className="photo"> 
                    <img src="../Images/profile.png" alt="User" /> 
                </div>
                <div className="maindiv">
                    <span className="name"> {currentUser.name} </span>
                    <div className="statscontainer">
                        <div className="statistics">
                            <div className="quantity"> {currentUser.age} </div>
                            <div className="label"> Age </div>
                        </div>
                        <div className="statistics">
                            <div className="quantity"> {currentUser.user_tests.length} </div>
                            <div className="label"> Tests </div>
                        </div>     
                    </div>
                </div>
            </div>
            {testMapped} 
        </div>
    )
}

export default UserProfile

