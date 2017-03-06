import React, { Component } from 'react';
import {Navbar,Nav,NavItem,Glyphicon} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Affix } from 'react-overlays';
import './header.css';
import banner from './banner2.jpg';

class Header extends Component {
    render() {
        return (
            
                <div >
                    <img className="img-responsive" src={banner} role="presentation" style={{objectFit: 'cover',width: '100%',maxHeight: "415px"}}/>
                    <Affix affixStyle={{width:"100%",top: 0, zIndex:25}} offsetTop={480} >
                        <Navbar collapseOnSelect className="mainMenu">
                            <Navbar.Header >
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <LinkContainer to="/"><NavItem eventKey={0}><Glyphicon glyph="home" /> Home</NavItem></LinkContainer>
                                    <LinkContainer to="/events"><NavItem eventKey={1}><Glyphicon glyph="calendar" /> Events</NavItem></LinkContainer>
                                    <LinkContainer to="/announcements"><NavItem eventKey={2}><Glyphicon glyph="tasks" /> Announcements</NavItem></LinkContainer>
                                    <LinkContainer to="/info"><NavItem eventKey={3}><Glyphicon glyph="alert" /> Information</NavItem></LinkContainer>
                                    {/*<LinkContainer to="/ranking"><NavItem eventKey={4}><Glyphicon glyph="star" /> Rankings</NavItem></LinkContainer>*/}
                                    {/*<LinkContainer to="/location"><NavItem eventKey={5}><Glyphicon glyph="globe" /> Location Finder</NavItem></LinkContainer>*/}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Affix >
                </div>
              
        );
    }
}

export default Header;