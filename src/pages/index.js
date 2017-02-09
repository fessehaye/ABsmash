import React, { Component } from 'react';
import {Grid,Row,Jumbotron,Carousel,Modal,Button} from 'react-bootstrap';
import blank from './blank.jpg';
import Airtable from 'airtable';
import './index.css';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');
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

class Main extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null
    };

  }

  

  componentDidMount = () => {
    base('Events').select({
        view: 'Main View',
        sort: [
            {field: 'Forced Order', direction: 'desc'},
            {field: 'start date', direction: 'desc'}
        ],
        filterByFormula: 'IS_BEFORE(TODAY(),{start date})',
        maxRecords: 7
    }).firstPage((err, records) => {
        if (err) { console.error(err); return; }
        this.setState({events: records, selectedEvent:records[0]});
    });
  }

  open = (event) => {
    this.setState({
      showModal:true,
      selected: event
    });
  }

  close = () => {
    this.setState({
      showModal:false
    });
  }

  render() {

    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h1>Welcome To The Edmonton Smash Community</h1>
            <p>The Edmonton Super Smash Bros. community is home to active, talented, and 
            welcoming scenes for every installment of the hit Nintendo series. Browse around to
             find information on our events and our players, and how you can get involved!</p>
          </Jumbotron>
        </Row>
        <Row>
          <Carousel>
            {
              this.state.events.map((event,index) => {
                return (<Carousel.Item key={index} onClick={() => {this.open(event)}}>
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

        </Row>

        <Modal show={this.state.showModal} onHide={() => {this.close()}}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.selected ? this.state.selected.get('Name') : '' }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => {this.close()}}>Close</Button>
            </Modal.Footer>
          </Modal>
      </Grid>
    );
  }
}

export default Main;
