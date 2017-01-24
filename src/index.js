import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/index';
import Events from './pages/events';

import { Router, Route,browserHistory } from 'react-router'

ReactDOM.render(
        <Router history={browserHistory}>
          <Route path='/' component={Main} />
          <Route path='/events' component={Events} />
          <Route path='/announcements' component={Events} />
          <Route path='/info' component={Events} />
          <Route path='/ranking' component={Events} />
          <Route path='/location' component={Events} />
        </Router>        
    ,
  document.getElementById('root')
);
