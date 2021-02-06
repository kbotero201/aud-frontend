import React, {useState, useEffect} from 'react'
import UserTestCard from "../Components/UserTestCard.js"

function UserProfile({currentUser, reloadCurrentUser}){

    const [testList, setTestList] = useState(currentUser.user_tests)

    console.log(testList)
   
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
            <div className="full-width">
                <div className="full-width1"> <img src="../Images/user.png" alt="User Image" /> </div>
                <div className="full-width2">
                    <h1> {currentUser.name}  </h1>
                    <h2> Age: {currentUser.age}  </h2>
                </div>
            </div>
           
            {testMapped}
            
        </div>
    )
}

export default UserProfile

