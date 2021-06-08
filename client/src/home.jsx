// import Items from "./main-body";
import Header from "./header";
import Tabs from "./Tabs";

export default function Home({ userinfo }) {
    return (
        <div className="Home">
            <Header userinfo={userinfo}></Header>
            <Tabs></Tabs>
        </div>
    );
}
