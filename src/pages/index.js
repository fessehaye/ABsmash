import React, { Component } from 'react';
import {Grid,Row,Jumbotron} from 'react-bootstrap';
import Carousel from '../components/smashCarousel';
import Airtable from 'airtable';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Main extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null
    };

    this.close = this.close.bind(this);
    this.open= this.open.bind(this);

  }

  componentDidMount = () => {
    base('Events').select({
        view: 'Main View',
        sort: [
            {field: 'Forced Order', direction: 'desc'},
            {field: 'start date', direction: 'desc'}
        ],
        filterByFormula: 'AND(IS_BEFORE(TODAY(),{start date}),Approved = 1)',
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
      <div>
        <Carousel 
            events={this.state.events}
            showModal={this.state.showModal}
            open={this.open}
            close={this.close}
            selected={this.state.selected}
          />
        <Grid>
        <Row>
          <Jumbotron style={{textAlign:"center"}}>
            <h1 >Welcome To The Edmonton Smash Community</h1>
            <p>The Edmonton Super Smash Bros. community is home to active, talented, and 
            welcoming scenes for every installment of the hit Nintendo series. Browse around to
             find information on our events and our players, and how you can get involved!</p>
          </Jumbotron>
        </Row>

      </Grid>
      </div>
      
    );
  }
}

export default Main;
