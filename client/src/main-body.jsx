import "./css/main-body.css";
function Box(props) {
    return (
        <>
        
        <span id="link">
            <img className="img" src={props.image} alt={props.alt}/>
            <a href={props.link}>{props.children}</a>
        </span>
        </>
    )
}
export default function Items() {
    return (
        <div id="main">
            <Box link="#" image="./assets/inbox.png" alt="calendar">INBOX</Box>
            <Box link="#" image="./assets/send.png" alt="calendar">SEND FILE</Box>
            <Box link="#" image="./assets/to-do-list.png" alt="calendar">TO DO LIST</Box>
            <Box link="#" image="./assets/calendar.png" alt="calendar">CALENDAR</Box>
        </div>
    )
}