import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from './App';
import * as serviceWorker from './serviceWorker';
import Hoc from './components/hoc';
import Diff from './components/Diff';
ReactDOM.render(<Router>
  <ul>
    <li>
      <Link to="/">App</Link>
    </li>
    <li>
      <Link to="/hoc">BEM Example</Link>
    </li>
  </ul>
  <hr />
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/hoc">
      <Hoc />
      {/* <BEMExample list={[{value: '1'},{value: '2'}, {value: '3'}]}/> */}
    </Route>
    <Route path="/diff">
      <Diff />
    </Route>
  </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
