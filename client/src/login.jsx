import React from "react";
import "./css/login.css";
function Form (){
    return(
        <div id="border" >
            <h1>Login</h1>
        <form id="form-style">
            <input placeholder="Username" />
            <input placeholder="Password" type="password"/>
            <button id="btn" type="submit">Login</button>
        </form>
        </div>
    )
}
export default Form;