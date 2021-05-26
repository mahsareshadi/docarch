import "./css/login.css";
function Form (){
    return(
        <div id="border" align="center">
            <h1>Login</h1>
        <form id="form-style">
            <input placeholder="Username" />
            <input placeholder="Password" type="password"/>
            <input id="btn" type="submit"/>
        </form>
        </div>
    )
}
export default Form;