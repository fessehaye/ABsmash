import React, { Component } from 'react';
import {Col,Row,Modal,Button,Accordion,Panel} from 'react-bootstrap';
import moment from 'moment';
import {Gmaps, InfoWindow} from 'react-gmaps';
import ReactMarkdown from 'react-markdown';
import 'whatwg-fetch';
import './smashModal.css';

const event_format = {
  "project m": "Project M",
  "melee":"Melee",
  "s4": "Wii U",
  "64": "Smash 64"
};

const params = {v: '3.exp', key: 'AIzaSyAExoxUrvOIqrwFVQL1E6XI2FW1VrUnofE'};

class SmashModal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      location: {}
    };


  }

  loadAddress = () => {
    let PostalCode = this.props.selected ? this.props.selected.get('Postal Code') : 'T6E0G2';
    fetch('http://maps.googleapis.com/maps/api/geocode/json?address=' + PostalCode)
    .then(function(response) {
        return response.json()
    }).then((json) => {
        if(json.results.length > 0){
            this.setState({ location : json.results[0].geometry.location });
        }
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
  }

  onMapCreated = (map) => {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  

  render() {
    let input = this.props.selected ? this.props.selected.get('Notes') : 'N/A';
    return (
      <Modal bsSize="large" show={this.props.showModal} onHide={() => {this.props.close()}} onEnter={() => {this.loadAddress()}}>
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
                        <Gmaps
                            width={'100%'}
                            height={'300px'}
                            lat={this.state.location.lat}
                            lng={this.state.location.lng }
                            zoom={17}
                            loadingMessage={'Be happy'}
                            params={params}
                            onMapCreated={this.onMapCreated}>
                            <InfoWindow
                            lat={this.state.location.lat}
                            lng={this.state.location.lng }
                            content={this.props.selected ? this.props.selected.get("Postal Code") : "N/A"}
                            onCloseClick={this.onCloseClick} />
        
                        </Gmaps>
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
                                <div style={{fontFamily:"Lato"}}><ReactMarkdown source={input} /></div> 
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
