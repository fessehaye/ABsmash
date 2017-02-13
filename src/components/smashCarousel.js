import React, { Component } from 'react';
import {Carousel,Modal,Button,Col,Row} from 'react-bootstrap';
import moment from 'moment';
import blank from './blank.jpg';
import './smashCarousel.css';

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

class smashCarousel extends Component {

  render() {
    return (
      <div>
        <Carousel>
                {
                this.props.events.map((event,index) => {
                    return (<Carousel.Item key={index} onClick={() => {this.props.open(event)}}>
                    <img className="carImg" height={720} alt="fake replacement" src={event.get('banner') ? event.get('banner')[0].url : blank}/>
                    <h3 className={event.get('Location') === "Edmonton" ? "edmLocation" : "cgyLocation"}>{event.get('Location')}</h3>
                    <div className="gameEvent">
                        {
                        event.get('events').map((games,index2) => {
                            return (<div className={event_class[games]} key={index2 + "b"}>
                                    <h5>{event_format[games]}</h5>
                                    </div>)
                        })
                        }
                    </div>
                    <Carousel.Caption>
                        <h3>{event.get('Name')}</h3>
                        <p>{event.get('Teaser')}</p>
                    </Carousel.Caption>

                    </Carousel.Item>)
                })
                }
                
            </Carousel>

            <Modal bsSize="large" show={this.props.showModal} onHide={() => {this.props.close()}}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.selected ? this.props.selected.get('Name') : '' }</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                    <Col md={6}>
                        <h5>Start Date: 
                            { this.props.selected ? moment(this.props.selected.get('start date')).format('LLL') : 'N/A'}
                        </h5>
                    </Col>
                    <Col md={6}>
                        <h5>End Date: 
                            { this.props.selected ? moment(this.props.selected.get('end date')).format('LLL') : 'N/A'}
                        </h5>
                    </Col>
                </Row>
                
                <Row>
                    <h3>City:</h3>
                    <p>{this.props.selected ? this.props.selected.get('Location') : 'N/A'}</p>
                </Row>

                <Row>
                    <h3>Details:</h3>
                    <pre>{this.props.selected ? this.props.selected.get('Notes') : 'N/A'}</pre>
                </Row>
                
                <Row>
                    <h3>Link:</h3>
                    <a href={this.props.selected ? this.props.selected.get('Bracket link') : 'N/A'}>
                        <p>
                            {this.props.selected ? this.props.selected.get('Bracket link') : 'N/A'}
                        </p>
                    </a>
                </Row>

                
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => {this.props.close()}}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
    );
  }
}

export default smashCarousel;