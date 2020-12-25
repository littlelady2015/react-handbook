import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BEMExample from './components/BEMExample';

ReactDOM.render(<Router>
  <ul>
    <li>
      <Link to="/">App</Link>
    </li>
    <li>
      <Link to="/bem">BEM Example</Link>
    </li>
  </ul>
  <hr />
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/bem">
      <BEMExample />
    </Route>
  </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
