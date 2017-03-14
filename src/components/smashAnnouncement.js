import React, { Component } from 'react';
import {Col,Panel,Row} from 'react-bootstrap';
import moment from 'moment';
import './smashEvent.css';

class smashEvent extends Component {

  render() {
    let announcement = this.props.announcement;
    return (
      <Panel onClick={() => {this.props.open(announcement)}}>
           <Col md={8} sm={12}>
                <Row><h3 >{announcement.get('Title')}</h3></Row>
                <Row><h4 >{announcement.get('SubTitle')}</h4></Row>
           </Col>
           <Col md={4} sm={12}>
                <h3 className="dateHeader" style={{textAlign:"right"}}>{moment(announcement.get('Created On')).format('LL')}</h3>
           </Col>
     </Panel>
    );
  }
}

export default smashEvent;