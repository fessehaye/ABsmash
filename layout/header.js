import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Navbar,Nav,NavItem,Image,Grid,Row} from 'react-bootstrap'


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
                <div style={banner}></div>
                <Navbar>
                    <Navbar.Header >
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}>Events</NavItem>
                            <NavItem eventKey={2}>Announcements</NavItem>
                            <NavItem eventKey={3}>Information</NavItem>
                            <NavItem eventKey={4}>Rankings</NavItem>
                            <NavItem eventKey={5}>Location Finder</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}