import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Index from '@/pages/index';
import Home from '@/pages/home/index.jsx';
import Login from '@/pages/login/index.jsx';
import List from '@/pages/demo/list.js';
import Office from '@/pages/template/office.js';
import App from '@/pages/template/app.jsx';
class RouterConfig extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact
              path='/'
              render={() => {
              return <Redirect to='/index'></Redirect>;
          }}
          />
          <Route component={Index} path='/index' />
          <Route component={Home} path='/home/:id'/>
          <Route component={Login} path='/login'/>
          <Route component={App} path='/app'/>
          <Route component={List} path='/list'/>
          <Route component={Office} path='/office'/>
        </Switch>
      </Router>
    );
  }
}

export default RouterConfig;