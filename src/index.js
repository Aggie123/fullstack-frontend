import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';

import User from './container/User';
import NewUser from './container/NewUser';
import UserOverall from './container/user/overall';

import NoMatch from './container/NoMatch';
import Home from './container/Home';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NewMessage from './container/NewMessage';



render (
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/user-new" component={NewUser}/>
        <Route path="/user-overall" component={UserOverall}/>
        <Route path="/user" component={User}/>
        <Route path="/message-new" component={NewMessage}/>

        <Route component={NoMatch}/>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
