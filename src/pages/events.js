import React, { Component } from 'react';
import {Grid,Row,Form,FormGroup,FormControl,Jumbotron} from 'react-bootstrap';
import Airtable from 'airtable';
import SmashModal from '../components/smashModal';
import Card from '../components/smashEvent';
import Switch from 'react-bootstrap-switch';
import './react-bootstrap-switch.css';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Event extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null,
      searchText: '',
      oldPost: false
    };

    this.close = this.close.bind(this);
    this.open= this.open.bind(this);

  }

  componentDidMount = () => {
    this.loadData();
  }

  loadData = () => {
    let query = {
        view: 'Main View',
        sort: [
            {field: 'Forced Order', direction: 'desc'},
            {field: 'start date', direction: 'asc'}
        ]
    }
    if(!this.state.oldPost){
      query.filterByFormula = 'AND(IS_BEFORE(TODAY(),{start date}),Approved = 1)';
    }
    base('Events').select(query).firstPage((err, records) => {
        if (err) { console.error(err); return; }
        this.setState({events: records, selected:records[0]});
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

    let filteredEvents= this.state.events.filter(
      (event) => {
        if(event){
          return event.get('Name').toLowerCase().includes(this.state.searchText);
        }
        return true;
      }
    );

    return (
      <Grid>      
        <Jumbotron>
          <Row>
            <Form>
              <FormGroup controlId="formInlineName">
                <FormControl 
                  type="text"
                  placeholder="Search"
                  value={this.state.searchText}
                  onChange={(e) => (
                    this.setState({searchText:e.target.value.toLowerCase()})
                  )}
                  />
              </FormGroup>
              <FormGroup>
                <h3>
                  View Old Events? &nbsp;
                  <Switch
                    onText="Yes"
                    offText="No"
                    value={this.state.oldPost}
                    onChange={ () => {
                      this.setState({oldPost:!this.state.oldPost});
                      this.loadData();
                      }}
                  />
                </h3>
              </FormGroup>
            </Form>
          </Row>
          <Row>
            {
              filteredEvents.map((event,index) => {
                    return (<div key={index} className="clickable"><Card event={event} open={this.open}/></div>)
              })
            }
          </Row>
        </Jumbotron>
        <SmashModal showModal={this.state.showModal} selected={this.state.selected} open={this.open} close={this.close}/>
      </Grid>
    );
  }
}

export default Event;
