import React, { Component } from 'react';
import {Col,Panel,Thumbnail,Row} from 'react-bootstrap';
import blank from './blank.jpg';


class smashEvent extends Component {

  render() {
    let event = this.props.event;
    return (
      <Panel >
           <Col md={2}>
                <Thumbnail src={event.get('banner') ? event.get('banner')[0].url : blank}/>
           </Col>
           <Col md={8}>
                <Row><h3>{event.get('Name')}</h3></Row>
           </Col>
     </Panel>
    );
  }
}

export default smashEvent;