import Items from "./main-body";
import Header from "./header";
import Settime from "./time";
import Logout from "./log-out";
import "./css/home.css";
export default function Home() {
    return (
        <div className="Home">
            <Header className="cnt"></Header>
            <Settime className="cnt"></Settime>
            <Items className="cnt"></Items>
            <Logout className="cnt"></Logout>
        </div>
    );
}
