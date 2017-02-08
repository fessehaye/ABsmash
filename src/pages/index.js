import React, { Component } from 'react';
import {Grid,Row,Jumbotron,Carousel} from 'react-bootstrap';
import blank from './blank.jpg';
import Airtable from 'airtable';
import './index.css';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: []
    };
  }

  componentDidMount = () => {
    base('Events').select({
        view: 'Main View',
        maxRecords: 7
    }).firstPage((err, records) => {
        if (err) { console.error(err); return; }
        this.setState({events: records});
        console.log(records)
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
                return (<Carousel.Item key={index}>
                  <img className="carImg" height={500} alt="900x500" src={event.get('banner') ? event.get('banner')[0].url : blank}/>
                  <h3 className={event.get('Location') === "Edmonton" ? "edmLocation" : "cgyLocation"}>{event.get('Location')}</h3>
                  <Carousel.Caption>
                    <h3>{event.get('Name')}</h3>
                    <p>{event.get('Teaser')}</p>
                  </Carousel.Caption>
                </Carousel.Item>)
              })
            }
            
          </Carousel>
        </Row>
      </Grid>
    );
  }
}

export default Main;
