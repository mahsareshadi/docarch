import "./css/main-body.css";
import { Link } from 'react-router-dom';
function Box(props) {
    return (
            <div id="link">
                <img className="img" src={props.image} alt={props.alt} />
                <a href={props.link}>{props.children}</a>
            </div>
    )
}
export default function Items() {
    return (
        <div id="main">
            <Link className="Link-tag" to="/inbox">
                <Box link="#" image="./assets/files.png" alt="files">FILES</Box>
            </Link>
            <Link className="Link-tag" to="/task">
                <Box link="#" image="./assets/to-do-list(2).png" alt="tasks">TASKS</Box>
            </Link>
        </div>
    )
}