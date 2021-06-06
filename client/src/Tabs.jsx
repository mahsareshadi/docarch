import { useState } from "react";
import "./css/Tab.css";
import { Link } from "react-router-dom";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <Link className="test-size" to="inbox">
                    <button id="tab1"
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        FILES
        </button>
                </Link>

                <Link className="test-size" to="/task">
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
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>INBOX</h2>
                    <hr />
                    <p>
                        file list
          </p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>TO DO LIST</h2>
                    <hr />
                    <p>
                        task list
          </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;