import React  from 'react';
import Home from "./home.jsx"
import LoginForm from "./login.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './Todolist';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/home" component={Home} />
          <Route path="/inbox" component ={Home}/>
          <Route path="/task" component ={Home}/>
          <Route path="/dolist" component ={TodoList}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
