import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '@/pages/template/index.jsx';
import Office from '@/pages/template/office.js';
class RouterConfig extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact
              path='/'
              render={() => {
              return <Redirect to='/app'></Redirect>;
          }}
          />
          <Route component={App} path='/app'/>
          <Route component={Office} path='/office'/>
        </Switch>
      </Router>
    );
  }
}

export default RouterConfig;