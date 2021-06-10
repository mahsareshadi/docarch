import React, { useState } from 'react';
import LoginForm from "./login.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Tabs from './Tabs'
// import TabHeader from './TabHeader.jsx';


function App() {
  const [userinfo, setUserinfo] = useState(null);
  if (userinfo == null) {
    return (
      <Router>
        <LoginForm setUserinfo={setUserinfo}></LoginForm>
      </Router>)
  } else {
    return (
      <Router>
        <Header userinfo={userinfo} ></Header>
        <div className="App">
          <Switch>
            {/* <Route path="/inbox" component={TabHeader} /> */}
            <Route path="/inbox" component={Tabs} />
            <Route path="/task"><Tabs userinfo={userinfo}></Tabs></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
