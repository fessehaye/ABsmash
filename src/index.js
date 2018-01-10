import React from 'react';
import ReactDOM from 'react-dom';
import Page from './layout/layout';
import Main from './container/index';
import Events from './container/events';
import Info from './container/information';
import Announcement from './container/announcement';

import { Router, Route,browserHistory } from 'react-router'

ReactDOM.render(
        <Router history={browserHistory}>
          <Route component={Page} >
            <Route path="/" component={Main} />
            <Route path='events' component={Events} />
            <Route path='announcements' component={Announcement} />
            <Route path='info' component={Info} />
            <Route path='ranking' component={Events} />
          </Route>
        </Router>        
    ,
  document.getElementById('root')
);
