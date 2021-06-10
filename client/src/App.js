import React, { useState } from 'react';
import LoginForm from "./login.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
// import Tabs from './Tabs'
import TabButton from './test';
import {FileRender} from './test2';
import {TaskRender} from './test2';


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
        <TabButton></TabButton>

        <div className="App">
          <Switch>
             <Route path="/inbox"><FileRender /></Route>
            <Route path="/task"><TaskRender userinfo={userinfo}></TaskRender></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
