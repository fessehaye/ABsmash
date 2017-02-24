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
const event_class = {
  "project m": "pM",
  "melee":"Melee",
  "s4": "S4",
  "64": "S64"
}

class smashEvent extends Component {

  render() {
    let event = this.props.event;
    return (
      <Panel >
           <Col md={2}>
                <Thumbnail src={event.get('banner') ? event.get('banner')[0].url : blank}/>
           </Col>
           <Col md={7} sm={6}>
                <Row><h3 >{event.get('Name')}</h3></Row>
                <Row>
                  <div className="gameEvent3">
                      {
                        event.get('events').map((games,index2) => {
                            return (<div className={event_class[games]} key={index2 + "b"}>
                                      <h5>{event_format[games]}</h5>
                                    </div>)
                        })
                      }
                  </div>
                </Row>
           </Col>
           <Col md={3} sm={6}>
                <Row><h3 style={{textAlign:"center"}}>{moment(event.get('start date')).format('LL')}</h3></Row>
           </Col>
     </Panel>
    );
  }
}

export default smashEvent;