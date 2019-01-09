import React, { Component } from 'react';
import {Col,Row,Modal,Button,Accordion,Panel} from 'react-bootstrap';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { withGoogleMap,Marker,GoogleMap } from "react-google-maps";
import 'whatwg-fetch';
import './smashModal.css';

const event_format = {
  "project m": "Project M",
  "melee":"Melee",
  "ultimate":"Ultimate",
  "s4": "Wii U",
  "64": "Smash 64"
};


class SmashModal extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      location: [{
        position: {
            lat: 0,
            lng: 0,
        }
        }]
    };


  }

  loadAddress = () => {
    let PostalCode = this.props.selected ? this.props.selected.get('Postal Code') : 'T6E0G2';
    fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBgAJsGpbIoV8rP45sj4lYkWPDJonaRrfA&address=' + PostalCode)
    .then(function(response) {
        return response.json()
    }).then((json) => {
        if(json.results.length > 0){
            this.setState({ location : [{position :json.results[0].geometry.location}] });
        }
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
  }
  

  render() {
    let input = this.props.selected ? this.props.selected.get('Notes') : 'N/A';
    let locationCode = this.props.selected ? this.props.selected.get('Postal Code') : 'null';
    let dateStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    // Wrap all `react-google-maps` components with `withGoogleMap` HOC
    // and name it GettingStartedGoogleMap
    const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={17}
        defaultCenter={{ lat: this.state.location[0].position.lat, lng: this.state.location[0].position.lng }}
        onClick={props.onMapClick}
    >
        {props.markers.map((marker, index) => (
        <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(index)}
            key={index}
        />
        ))}
    </GoogleMap>
    ));

    return (
      <Modal bsSize="large" show={this.props.showModal} onHide={() => {this.props.close()}} onEnter={() => {this.loadAddress()}}>
              <Modal.Header closeButton>
                <h4 className="modal-title" style={{display:"flex"}}>
                    <span >{this.props.selected ? this.props.selected.get('Name') : '' }</span> 
                    <span style={{marginLeft:"auto",marginRight:15}}>{this.props.selected ? this.props.selected.get('City') : 'N/A'}</span>
                </h4>
              </Modal.Header>
              <Modal.Body>
                <Row>
                    <Col md={12}>
                        <h4 style={dateStyle}> 
                             <span> { this.props.selected ? moment(this.props.selected.get('start date')).format('LLL') : 'N/A'}</span>
                             <span style={{margin:"0 20px"}}> - </span>
                             <span> { this.props.selected ? moment(this.props.selected.get('end date')).format('LLL') : 'N/A'}</span>
                        </h4>
                    </Col>
                </Row>
                
                <Row>
                    
                    <Col md={12}>
                        {
                            locationCode
                             ? <GettingStartedGoogleMap
                            containerElement={
                                <div style={{ height: `300px`,width : "100%",padding:"0 15px" }} />
                            }
                            mapElement={
                                <div style={{ height: `300px`,width : "100%",padding:"0 15px" }} />
                            }
                            onMapLoad={this.handleMapLoad}
                        
                            markers={this.state.location}
                            />
                             : null
                        }
                         
                       
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div style={{marginTop:10, justifyContent:'center'}}className="gameEvent2">
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
                                <div style={{fontFamily:"Lato",wordWrap:'break-word'}}><ReactMarkdown source={input} /></div> 
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
