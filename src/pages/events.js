import React, { Component } from 'react';
import {Grid,Row,Form,FormGroup,FormControl,Jumbotron} from 'react-bootstrap';
import Airtable from 'airtable';
import SmashModal from '../components/smashModal';
import Card from '../components/smashEvent';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Event extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null,
      searchText: ''
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
        //filterByFormula: 'AND(IS_BEFORE(TODAY(),{start date}),Approved = 1)'
    }).firstPage((err, records) => {
        if (err) { console.error(err); return; }
        this.setState({events: records, selectedEvent:records[0]});
        console.log(this.state.events);
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
        <Jumbotron>
          <Row>
            <Form>
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="Search" value={this.state.searchText}/>
              </FormGroup>
            </Form>
          </Row>
          <Row>
            {
              this.state.events.map((event,index) => {
                    return (<Card key={index} event={event} open={this.open(event)}/>)
              })
            }
          </Row>
        </Jumbotron>
        <SmashModal selected={this.state.selected} open={this.open} close={this.close}/>
      </Grid>
    );
  }
}

export default Event;
