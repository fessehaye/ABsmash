import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
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
    let shadow = event.get('tourney type') === 'regional' || event.get('tourney type') === 'major' ? '5px 5px 5px #ffd896' : '5px 5px 5px #888888'
    return (
      <Panel onClick={() => {this.props.open(event)}} style={{boxShadow: shadow}}>
           <div style={{display:"flex",alignItems:'center'}}>
              <img role="presentation" src={event.get('banner') ? event.get('banner')[0].url : blank} style={{objectFit:"cover",maxHeight:100,maxWidth:"40%",flex:'0 0 auto'}}/>
              <div style={{display:"flex",flex:'1 1 auto',flexDirection:'column',justifyContent:'center',marginLeft:20}}>
                <span style={{marginLeft:5,fontSize:26,lineHeight:'24px',fontWeight:700}}>{event.get('Name')}</span>
                <span style={{marginLeft:5,marginBottom:10,color:"#888",fontSize:18}}>{moment(event.get('start date')).format('LL')}</span>
                <div className="gameEvent3">
                    {
                      event.get('events').map((games,index2) => {
                          return (
                                    <h3 key={index2 + "b"}>{event_format[games]}</h3>
                                  )
                      })
                    }
                </div>
                
              </div>
           </div>
     </Panel>
    );
  }
}

export default smashEvent;