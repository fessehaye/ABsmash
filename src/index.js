import React from 'react';
import ReactDOM from 'react-dom';
import Page from './layout/layout'
import Main from './pages/index';
import Events from './pages/events';
import Info from './pages/information';

import { Router, Route,browserHistory,IndexRoute } from 'react-router'

ReactDOM.render(
        <Router history={browserHistory}>
          <Route path='/' component={Page} >
            <IndexRoute component={Main} />
            <Route path='events' component={Events} />
            <Route path='announcements' component={Events} />
            <Route path='info' component={Info} />
            <Route path='ranking' component={Events} />
            <Route path='location' component={Events} />
          </Route>
        </Router>        
    ,
  document.getElementById('root')
);
