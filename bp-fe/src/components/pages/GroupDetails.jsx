// This function will receive the data passeed on as shown below from the 
// <Route path="/group-detail:groupId" element={<GroupDetail />}/> in app.js 

//it will also fetch data from our backed server using the value passed 
// on the above dynamic route using string interpolation 


import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";


//this function will fetch an individual groups data from the DB \\
const GroupDetailsPage = () => {

    const [groupData, setGroupData] = useState(null);
    const {groupId} = useParams();
    console.log(groupId);
   
    useEffect(() => {
      const getData = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/groups/${groupId}/`);
          // setLoading false here should popularte when data fecthing occurs
          setGroupData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, [groupId]);
    //function only triggers once



    return(
        <div>
            <Link to={"/"}>Back</Link>
            <h1>Group {groupId} details</h1>
            <p>{groupId}</p>
        </div>
    );
};

export default GroupDetailsPage;



// NOTE  the dynamic route set up in App.js will match any URL that 
// starts with /details and ends with some value. ex details/1, details/2, 
// details/groupName, details/anyValue

//  to access that value we use the custom hook useParams as shown above.



// Fetching Data to this component to this component \\
// Note the ` ` used in the useEffect with string interpolation 
// to add the userIde value we got from useParams


// to preview data http://localhost:3000 then netword then xhr