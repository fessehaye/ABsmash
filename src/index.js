import React from 'react';
import ReactDOM from 'react-dom';
import Page from './layout/layout'
import Main from './pages/index';
import Events from './pages/events';
import Info from './pages/information';
import LocationFind from './pages/location';

import { Router, Route,browserHistory } from 'react-router'

ReactDOM.render(
        <Router history={browserHistory}>
          <Route component={Page} >
            <Route path="/" component={Main} />
            <Route path='events' component={Events} />
            <Route path='announcements' component={Events} />
            <Route path='info' component={Info} />
            <Route path='ranking' component={Events} />
            <Route path='location' component={LocationFind} />
          </Route>
        </Router>        
    ,
  document.getElementById('root')
);
