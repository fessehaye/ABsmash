import * as React from "react";
import * as ReactDOM from "react-dom";
import Layout from "./layout";
import Main from "./container";
import Announcements from "./container/announcement";
import Events from "./container/events";
import Info from "./container/information";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

var registerObserver = require('react-perf-devtool');
registerObserver();

ReactDOM.render(
    <Router>
      <Layout>
        <Route exact path="/" component={Main}/>
        <Route path="/announcements" component={Announcements}/>
        <Route path="/events" component={Events}/>
        <Route path="/info" component={Info}/>
      </Layout>
  </Router>,
    document.getElementById('root') as HTMLElement
  );
