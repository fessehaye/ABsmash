import * as React from "react";
import * as logo from "../assets/logo.png";

export default class Header extends React.Component<{}, {}> {
    
  render() {
      return (
        <header>
          <nav>
            <img src={logo} role="presentation"/>
            <span>Home</span>
            <span>Events</span>
            <span>Announcement</span>
            <span>Information</span>
          </nav>
        </header>
      );
    }
  }