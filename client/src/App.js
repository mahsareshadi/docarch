import React, { useState } from 'react';
import Home from "./home.jsx"
import LoginForm from "./login.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
        <div className="App">
          <Switch>
            {/* <Route path="/" exact component={LoginForm} /> */}
            <Route path="/home" exact component={() => <Home userinfo={userinfo} />} />
            <Route path="/inbox" component={Home} />
            <Route path="/task" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
