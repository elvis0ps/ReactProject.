import React from "react";
import "./Form.css"

import { useState } from "react";






function Form() {

 let [username, setUsername] = useState("");

 let [password, setPassword] = useState("");

 const getUsername = (e) => {

 setUsername(e.target.value);

 };




 const getPassword = (e) => {

 setPassword(e.target.value);

 };




 const submit = (e) => {

 alert(`Username:${username}\nPassword:${password}`);

 };

 return (

 <div className="form">

 <div>

 <h1 className="formheader">Login Form</h1>

 </div>

 <div className="username">

  <h3>Username</h3>

  <input

   type="text"

   onChange={getUsername}

   placeholder="enter username"

  ></input>

 </div>

 <div className="password">

  <h3>Password</h3>

  <input type="password"

   onChange={getPassword}

 placeholder="enter password"

  ></input>

 </div>

 <br></br>

 <br></br>

 <button className="btn" onClick={() => submit()}>

  Submit

 </button>

 </div>

 );

}




export default Form;





