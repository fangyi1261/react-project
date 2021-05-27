import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Index from '@/pages/index'
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
          <Route
            path='/' exact render={ () => {
              return <Redirect to='/index'></Redirect>
          } }/>
          <Route path='/index' component={ Index }/>
          <Route path='/home/:id' component={ Home }/>
          <Route path='/login' component={ Login }></Route>
          <Route path='/app' component={ App }/>
          <Route path='/list' component={ List }/>
          <Route path='/office' component={ Office }/>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig;