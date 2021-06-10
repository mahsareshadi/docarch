import { useState } from "react";
import "./css/Tabnew.css";
import { Link } from "react-router-dom";
// import TodoList from './Todolist';

function CreateBtn(props) {
    const [toggleState, setToggleState] = useState("1");
    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
        <>
                
            <Link className="tab-size" to={props.to}>
                <button id={props.id} className={toggleState === props.toggle ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(props.toggle)}>
                    {props.children}
                </button>
            </Link>
        </>
    )
}

export default function TabButton() {
    return (
        <div className="tab-container">
            <div className="bloc-tabs">
                <CreateBtn
                    to="/inbox"
                    id="tab1"
                    toggle="1"
                >
                    FILES
                </CreateBtn>

                <CreateBtn
                    to="/task"
                    id="tab2"
                    toggle="2"
                >
                    TASKS
                </CreateBtn>
            </div>
        </div>
    )
}
