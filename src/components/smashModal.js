import React, { Component } from 'react';
import {Col,Row,Modal,Button,Accordion,Panel} from 'react-bootstrap';
import moment from 'moment';
import './smashModal.css';

const event_format = {
  "project m": "Project M",
  "melee":"Melee",
  "s4": "Wii U",
  "64": "Smash 64"
};

class SmashModal extends Component {
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
                                <div style={{fontFamily:"Lato"}}>{ this.props.selected && this.props.selected.fields.notes 
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
