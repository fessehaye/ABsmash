import React, { Component } from 'react';
import {Col,Panel,Thumbnail,Row} from 'react-bootstrap';
import blank from './blank.jpg';
import moment from 'moment';
import './smashEvent.css';

const event_format = {
  "project m": "Project M",
  "melee":"Melee",
  "s4": "Wii U",
  "64": "Smash 64"
};


class smashEvent extends Component {

  render() {
    let event = this.props.event;
    return (
      <Panel onClick={() => {this.props.open(event)}}>
           <Col md={2}>
                <Thumbnail src={event.get('banner') ? event.get('banner')[0].url : blank}/>
           </Col>
           <Col md={7} xs={6}>
                <Row><h3 >{event.get('Name')}</h3></Row>
                <Row>
                  <div className="gameEvent3">
                      {
                        event.get('events').map((games,index2) => {
                            return (
                                      <h3 key={index2 + "b"}>{event_format[games]}</h3>
                                    )
                        })
                      }
                  </div>
                </Row>
           </Col>
           <Col md={3} xs={6}>
                <Row><h3 style={{textAlign:"center"}}>{moment(event.get('start date')).format('LL')}</h3></Row>
           </Col>
     </Panel>
    );
  }
}

export default smashEvent;