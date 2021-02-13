import React, {useState, useEffect} from 'react'
import UserTestCard from "../Components/UserTestCard.js"
import { Link } from "react-router-dom"


function UserProfile({currentUser, reloadCurrentUser}){

    const [testList, setTestList] = useState(currentUser.user_tests)
   
    let testMapped 
    if (testList){
        testMapped = testList.map((test) => (
         <UserTestCard 
            test={test} 
            key={test.id} 
            setTestList={setTestList} 
            handleDeletedTest={handleDeletedTest} />   
        )) 
    }


    function handleDeletedTest(testId){
        let updatedTestList = testList
            .filter((test) => 
                test.id !== testId
            )
        setTestList(updatedTestList)
        reloadCurrentUser(currentUser)
    }


    return(
        <div>
            <div className="container">
                <div className="bubbles"></div>
                <div className="photo"> 
                    <img src="../Images/profile.png" alt="User Image" /> 
                </div>
                <div className="maindiv">
                    <span className="name"> {currentUser.name} </span>
                    <div className="statscontainer">
                        <div className="statistics">
                            <div className="quantity"> {currentUser.age} </div>
                            <div className="units"> Age </div>
                        </div>
                        <div className="statistics">
                            <div className="quantity"> {testList.length} </div>
                            <div className="units"> Tests </div>
                        </div>     
                    </div>
                </div>
            </div>
            {testMapped} 
        </div>
    )
}

export default UserProfile

