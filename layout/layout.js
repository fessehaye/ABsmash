import React from 'react'
import Header from './header'
import Footer from './footer'
import {Grid} from 'react-bootstrap'

export default class extends React.Component {
    render() {
        return (
        <div >
        
                    <Header />
                    {this.props.children}
                    <Footer/>
               
            
        </div>
        );
    }  
}