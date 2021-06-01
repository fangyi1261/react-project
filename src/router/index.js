import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '@/pages/template/index.jsx';
import Example from '@/pages/hooks/Example.jsx';
import Example1 from '@/pages/hooks/Example1.js';
import Example2 from '@/pages/hooks/Example2.js';
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
          <Route component={Example} path='/example'/>
          <Route component={Example1} path='/example1'/>
          <Route component={Example2} path='/example2'/>
        </Switch>
      </Router>
    );
  }
}

export default RouterConfig;