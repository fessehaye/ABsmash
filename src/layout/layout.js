import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="bodyContent">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
