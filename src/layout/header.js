import React, { Component } from 'react';
import {Navbar,Nav,NavItem,Glyphicon} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './header.css';
import banner from './banner.jpg';

class Header extends Component {
    render() {
        return (
            
                <div>
                    <Navbar className="header" style={{margin: 0}}>
                        <Navbar.Header >
                            <Navbar.Brand>
                                <a href="/">Edmonton Smash Community</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                    <img className="img-responsive" src={banner} role="presentation" style={{maxHeight: 300,width: '100%'}}/>
                    <Navbar collapseOnSelect className="mainMenu">
                        <Navbar.Header >
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/events"><NavItem eventKey={1}><Glyphicon glyph="calendar" /> Events</NavItem></LinkContainer>
                                <LinkContainer to="/announcements"><NavItem eventKey={2}><Glyphicon glyph="tasks" /> Announcements</NavItem></LinkContainer>
                                <LinkContainer to="/info"><NavItem eventKey={3}><Glyphicon glyph="alert" /> Information</NavItem></LinkContainer>
                                {/*<LinkContainer to="/ranking"><NavItem eventKey={4}><Glyphicon glyph="star" /> Rankings</NavItem></LinkContainer>*/}
                                <LinkContainer to="/location"><NavItem eventKey={5}><Glyphicon glyph="globe" /> Location Finder</NavItem></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
              
        );
    }
}

export default Header;