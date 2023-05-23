import React from "react";
import "./FetchApi.css";
import {useEffect, useState } from 'react';

 function Activities(){
     function loadActivity(){
        fetch("https://www.boredapi.com/api/activity")
        .then((response)=>response.json())
        .then((data)=> setActivity(data.activity));

     }
     const [activity, setActivity]=useState([]);
     
     useEffect(()=>{loadActivity();
      },[]);
     return (
     <div id="activity">
         <h1>Daily Activity</h1>
         <h2>{activity}</h2>
         <button onClick={loadActivity} id="btn"> Load Another</button>
     </div>)


 }





export default Activities;