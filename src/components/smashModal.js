import React, { Component } from 'react';
import {Col,Row,Modal,Button,Accordion,Panel} from 'react-bootstrap';
import moment from 'moment';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import 'whatwg-fetch';
import './smashModal.css';

const event_format = {
  "project m": "Project M",
  "melee":"Melee",
  "s4": "Wii U",
  "64": "Smash 64"
};

class SmashModal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      location: {}
    };

    this.addLocation = this.addLocation.bind(this);

  }

  addLocation = (location) => {
    this.setState(location);
  }

  componentDidMount = () => {
    let PostalCode = this.props.selected ? this.props.selected.get('Address') : 'T6E0G2';
    fetch('http://maps.googleapis.com/maps/api/geocode/json?address=' + PostalCode)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        if(json.results.length > 0){
            this.addLocation({ location : json.results[0].geometry.location });
        }
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
  }

  

  render() {
    return (
      <Modal bsSize="large" show={this.props.showModal} onHide={() => {this.props.close()}}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.selected ? this.props.selected.get('Name') : '' }</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                    <Col md={6}>
                        <h3>Start Date: 
                             <span> { this.props.selected ? moment(this.props.selected.get('start date')).format('LLL') : 'N/A'}</span>
                        </h3>
                    </Col>
                    <Col md={6}>
                        <h3>End Date: 
                            <span> { this.props.selected ? moment(this.props.selected.get('end date')).format('LLL') : 'N/A'}</span>
                        </h3>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={12}>
                        <h3>City: 
                            <span> {this.props.selected ? this.props.selected.get('City') : 'N/A'}</span>
                        </h3>
                    </Col>
                    <Col md={12}>
                        <h3>Address:</h3>
                        <p>{this.props.selected ? this.props.selected.get('Address') : 'N/A'}</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <h3>Games:</h3>
                        <div className="gameEvent2">
                            {
                                this.props.selected ?
                                this.props.selected.get('events').map((games,index2) => {
                                    return (<h2 key={index2 + "b"}>{event_format[games]}</h2>)
                                })
                                : "N/A"
                            }
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <h3>Link:</h3>
                        <a href={this.props.selected ? this.props.selected.get('Bracket link') : 'N/A'}>
                            <p>
                                {this.props.selected ? this.props.selected.get('Bracket link') : 'N/A'}
                            </p>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Accordion>
                            <Panel header="More Detail..." eventKey="1">
                                <div style={{fontFamily:"Lato"}}>{ this.props.selected && this.props.selected.get('Notes') 
                                        ? this.props.selected.get('Notes').split("\n").map(function(item, key) {
                                            return (
                                                <span key={key}>
                                                {item}
                                                <br/>
                                                </span>
                                            )
                                            })
                                        : 'N/A'}</div> 
                            </Panel>
                        </Accordion>
                    </Col>                   
                </Row>
                
                
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => {this.props.close()}}>Close</Button>
              </Modal.Footer>
            </Modal>
    );
  }
}

export default SmashModal;
