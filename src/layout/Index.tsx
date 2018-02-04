import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component<{}, {}> {
    
  render() {
  
      return (
        <div className="layout">
          <Header />
          <section className="content">
            {this.props.children}
          </section>
          <footer />
        </div>
      );
    }
  }