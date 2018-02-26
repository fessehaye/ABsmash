import * as React from 'react';
import * as logo from '../assets/logo.png';

interface HeaderState {
  mobileNav : boolean;
}

export default class Header extends React.Component<{}, HeaderState> {
  
  constructor(props:{}){
    super(props);
    this.state = {
      mobileNav : false
    };
  }

  toggleMobile = () => {
    this.setState({mobileNav: !this.state.mobileNav});
  }

  render() {   
      return (
        <header>
          <nav role="navigation">
            <img src={logo} role="presentation"/>
            <a className="nav__link" href="#">Home</a>
            <a className="nav__link" href="#">Events</a>
            <a className="nav__link" href="#">Announcement</a>
            <a className="nav__link" href="#">Information</a>
            <div className="bars-container" onClick={this.toggleMobile}>
              <i className="fas fa-2x fa-bars" />
            </div>
          </nav>
          <div className={!this.state.mobileNav ? 'mobile-nav' : 'mobile-nav nav-open'}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Announcement</a></li>
              <li><a href="#">Information</a></li>
            </ul>
          </div>
        </header>
      );
    }
  }