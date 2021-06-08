import "./css/header.css";

export default function Header({ userinfo }) {


    return (
        <div id="header">
            Hello
            {" " + userinfo}
        </div>
    )
}
