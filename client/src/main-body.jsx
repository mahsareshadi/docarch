import "./css/main-body.css";
function Box(props) {
    return (
        <span id="link">
            <a href={props.link}>{props.children}</a>
        </span>
    )
}
export default function Items() {
    return (
        <div id="main">
            <Box link="#">INBOX</Box>
            <Box link="#">SEND FILE</Box>
            <Box link="#">TO DO LIST</Box>
            <Box link="#">CALENDAR</Box>
        </div>
    )
}