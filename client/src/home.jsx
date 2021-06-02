import Items from "./main-body";
import Header from "./header";
import Settime from "./time";
import Logout from "./log-out";

export default function Home() {
    return (
        <div className="Home">
            <Header></Header>
            <Settime></Settime>
            <Items></Items>
            <Logout></Logout>
        </div>
    );
}
