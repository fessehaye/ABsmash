import React from 'react'
import Head from 'next/head'
import {Navbar,Nav,NavItem,Image,Grid,Row,Glyphicon} from 'react-bootstrap'

export default class extends React.Component {
    render() {
        var banner = {
            width:'100%',
            height:'400px',
            backgroundImage:'url("/static/banner.jpg")',
            backgroundSize:'cover'
        }
        
        return (
            <div>
                <Head>
                    <title>AB Smash</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />   
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                    <style>{`
                        @media (min-width: 768px) {
                            .navbar .navbar-nav {
                                float: none;
                                vertical-align: top;
                                display: -webkit-flex;
                                display: flex;
                                -webkit-justify-content: space-between;
                                justify-content: space-between;
                            }

                            .navbar .navbar-collapse {
                                text-align: center;
                            }
                            
                        }

                    `}</style>
                </Head>
                <Navbar inverse fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Edmonton Smash Community</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <div style={banner}></div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header >
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}  onClick={() => location.href = '/events'}><Glyphicon glyph="calendar" /> Events</NavItem>
                            <NavItem eventKey={2} onClick={() => location.href = '/announcements'}><Glyphicon glyph="tasks" /> Announcements</NavItem>
                            <NavItem eventKey={3} onClick={() => location.href = '/info'}><Glyphicon glyph="alert" /> Information</NavItem>
                            <NavItem eventKey={4} onClick={() => location.href = '/ranking'}><Glyphicon glyph="star" /> Rankings</NavItem>
                            <NavItem eventKey={5} onClick={() => location.href = '/location'}><Glyphicon glyph="globe" /> Location Finder</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}