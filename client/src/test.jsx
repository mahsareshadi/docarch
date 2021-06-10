import { useState } from "react";
import "./css/Tab.css";
import { Link } from "react-router-dom";
import TodoList from './Todolist';


function CreateBtn(props) {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
        <>
                {/* <CreateContent toggleState={toggleState}></CreateContent> */}
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


function CreateContent(props) {
    return (
        <div className="container">
            <div className="content-tabs">
                <div className={props.toggleState === props.num ? "content  active-content" : "content"}>
                    <h2>{props.title}</h2>
                    <hr />
                    <p>{props.children}</p>
                </div>
            </div>
        </div>

    )
}

// export  function FileRender() {
//     return (
//         <>
//         <CreateContent num="1" title="INBOX">
//             file list
//         </CreateContent>
// </>
//     );

// }

// export function TaskRender({userinfo}) {
//     return (
//         <CreateContent
//             num="2"
//             title="TASKS"
//         >
//              <TodoList userinfo={userinfo}></TodoList>
//         </CreateContent>
//     )
// }



   

