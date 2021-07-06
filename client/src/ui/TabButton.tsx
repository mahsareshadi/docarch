import { useState } from "react";
import "../css/TabButton.css";
import { Link } from "react-router-dom";
// import TodoList from './Todolist';
interface Props {
  to: string,
  id: string,
  toggle: number,
  children: string

}

// function CreateBtn(props: Props) {
//   const [toggleState, setToggleState] = useState<number>(1);
//   return (
//     <>
//       <Link className="tab-size" to={props.to}>
//         <button onClick={() => {
//           setToggleState(0);
//           setToggleState(props.toggle)
//         }} id={props.id} className={toggleState === props.toggle ? "tabs active-tabs" : "tabs"}
//         >
//           {props.children}
//         </button>
//       </Link>
//     </>
//   )
// }

export default function TabButton() {
  const [toggleState, setToggleState] = useState<number>(1);

  return (
    <div className="bloc-tabs">
      <Link className="tab-size" to="inbox">
        <button id="tab1"
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(1)}
        >
          FILES
        </button>
      </Link>

      <Link className="tab-size" to="/task">
        <button id="tab2"
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(2)}
        >
          TASKS
        </button>
      </Link>
    </div>
  )
}
