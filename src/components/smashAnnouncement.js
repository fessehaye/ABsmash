import React, { Component } from 'react';
import {Col,Panel,Row} from 'react-bootstrap';
import moment from 'moment';
import './smashEvent.css';

class smashEvent extends Component {

  render() {
    let announcement = this.props.announcement;
    return (
      <Panel onClick={() => {this.props.open(announcement)}} style={{boxShadow: '5px 5px 5px #888888'}}>
          <div style={{display:"flex",flex:'1 1 auto',flexDirection:'column',justifyContent:'center',marginLeft:20}}>
                <span style={{marginLeft:5,marginBottom:10,color:"#888",fontSize:18}}>{moment(announcement.get('Created On')).format('LL')}</span>
                <span style={{marginLeft:5,fontSize:26,lineHeight:'24px',fontWeight:700}}>{announcement.get('Title')}</span>
                <span style={{marginLeft:5,fontSize:24,lineHeight:'22px'}}>{announcement.get('SubTitle')}</span>
          </div>
     </Panel>
    );
  }
}

export default smashEvent;