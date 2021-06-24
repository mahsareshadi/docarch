import React, { useState } from 'react';
import LoginForm from "./Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import TabButton from './TabButton';
import { FileRender } from './ContentRender';
import { TaskRender } from './ContentRender';
import { User } from '../../../common/src/User';


function App() {
  const [userinfo, setUserinfo] = useState<User>({firstname:"test",lastname:"test",userid:123});


  return (

    <Router>
      <Header userinfo={userinfo} ></Header>
      <TabButton></TabButton>

      <div className="App">
        <Switch>
          <Route path="/login"> <LoginForm setUserinfo={setUserinfo}></LoginForm></Route>
          <Route path="/inbox"><FileRender /></Route>
          <Route path="/task"><TaskRender userinfo={userinfo}></TaskRender></Route>
        </Switch>
      </div>
    </Router>
  );
}


// function App() {
//   const [userinfo, setUserinfo] = useState(null);
//   if (userinfo == null) {
//     return (
//       <Router>
//         <LoginForm setUserinfo={setUserinfo}></LoginForm>
//       </Router>)
//   } else {
//     return (

//       <Router>
//         <Header userinfo={userinfo} ></Header>
//         <TabButton></TabButton>

//         <div className="App">
//           <Switch>
//             <Route path="/inbox"><FileRender /></Route>
//             <Route path="/task"><TaskRender userinfo={userinfo}></TaskRender></Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }
export default App;
