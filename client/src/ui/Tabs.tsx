import { useState } from "react";
import "./css/Tab.css";
import { Link } from "react-router-dom";
import TodoList from './TodoList';

function Tabs({userinfo}) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <Link className="tab-size" to="inbox">
                    <button id="tab1"
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        FILES
        </button>
                </Link>

                <Link className="tab-size" to="/task">
                    <button id="tab2"
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        TASKS
        </button>
                </Link>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h2>INBOX</h2>
                    <hr />
                    <p>
                        file list
                    </p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>TO DO LIST</h2>
                    <hr />
                    <p>
                        <TodoList userinfo={userinfo}></TodoList>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;