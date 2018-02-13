import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from './layout';
import Main from './container';
import Announcements from './container/Announcement';
import Events from './container/Events';
import Information from './container/Information';
import * as registerObserver from 'react-perf-devtool';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

registerObserver();

ReactDOM.render(
    <Router>
      <Layout>
        <Route exact={true} path="/" component={Main}/>
        <Route path="/announcements" component={Announcements}/>
        <Route path="/events" component={Events}/>
        <Route path="/info" component={Information}/>
      </Layout>
  </Router>,
    document.getElementById('root') as HTMLElement
  );
