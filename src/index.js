import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router'
import App from './App';
import BEMExample from './components/BEMExample';
import Test from './components/test'
import RenderComp from './components/render-comp'
import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
  <>
    <ul>
      <li><a href="/">App</a></li>
      <li><a href="/bem">BEM</a></li>
      <li><a href="/render-props">RenderProps</a></li>
      <li><a href="/test">动效</a></li>
    </ul>
    <Router>
      <Switch>
          <Route exact path='/' component={App} />  
          <Route path='/bem' component={BEMExample} />
          <Route path='/render-props' component={RenderComp} />
          <Route path='/test' component={Test} />
      </Switch> 
    </Router>
  </>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
