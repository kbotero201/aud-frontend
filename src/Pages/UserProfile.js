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
            <h1> Profile Page </h1>
            <h1> Name: {currentUser.name}  </h1>
            <h1> Age: {currentUser.age}  </h1>
            {testMapped}
            
        </div>
    )
}

export default UserProfile

