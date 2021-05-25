import React from 'react';
import Index from '@/pages/index'
import Home from '@/pages/home/index.jsx';
import Login from '@/pages/login/index.jsx';
import App from '@/App.js';
import List from '@/pages/todoList/list.js';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import { createHashHistory } from 'history';
// const history = createHashHistory();

class RouterConfig extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path='/' exact render={ () => {
              return <Redirect to='/index'></Redirect>
          } }/>
          <Route path='/index' component={ Index }/>
          <Route path='/home/:id' component={ Home }/>
          <Route path='/login' component={ Login }></Route>
          <Route path='/app' component={ App }/>
          <Route path='/list' component={ List }/>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig;