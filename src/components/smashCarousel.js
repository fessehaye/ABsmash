import React, { Component } from 'react';
import {Carousel,Glyphicon,OverlayTrigger,Tooltip} from 'react-bootstrap';
import SmashModal from './smashModal';

import blank from '../assets/blank.jpg';
import './smashCarousel.css';

const event_format = {
  "project m": "Project M",
  "melee":"Melee",
  "ultimate":"Ultimate",
  "s4": "Wii U",
  "64": "Smash 64"
};

const tooltipRegional = (
  <Tooltip id="tooltip"><strong>Out of Region Attendance Expected!</strong></Tooltip>
);

const tooltipMajor = (
  <Tooltip id="tooltip"><strong>Larger Player Attendance!</strong></Tooltip>
);

class smashCarousel extends Component {

  render() {
    return (
      <div>
        <Carousel>
                {
                this.props.events.map((event,index) => {
                    return (
                    <Carousel.Item style={{cursor:'pointer'}} key={index} onClick={() => {this.props.open(event)}}>
                      <img className="carImg" height={720} alt="fake replacement" src={event.get('banner') ? event.get('banner')[0].url : blank}/>
                      <h3 className={event.get('City') === "Edmonton" ? "edmLocation" : "cgyLocation"}>{event.get('City')}</h3>
                      <div className="gameEvent">
                          {
                            
                            event.get('events').map((games,index2) => {
                                return (<h2 key={index2 + "b"} >{event_format[games]}</h2>)
                            })
                          }
                      </div>
                      <Carousel.Caption>
                          <h3>
                            {event.get('Name')} &nbsp;
                            {
                              event.get('tourney type') === 'regional' ?
                                <OverlayTrigger placement="top" overlay={tooltipRegional}>
                                  <Glyphicon style={{color: "gold"}} className="tourneyWarning glyphicon" glyph="exclamation-sign" />
                                </OverlayTrigger> : null
                            }

                            {
                              event.get('tourney type') === 'major' ?
                                <OverlayTrigger placement="top" overlay={tooltipMajor}>
                                  <Glyphicon style={{color: "silver"}} className="tourneyWarning glyphicon" glyph="exclamation-sign" />
                                </OverlayTrigger> : null
                            }
                          </h3>
                          <p>{event.get('Teaser')}</p>
                          
                      </Carousel.Caption>

                    </Carousel.Item>)
                })
                }
                
            </Carousel>
            <SmashModal {...this.props}/>
            
          </div>
    );
  }
}

export default smashCarousel;