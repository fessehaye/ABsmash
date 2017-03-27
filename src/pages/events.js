import React, { Component } from 'react';
import {Grid,Row,Form,FormGroup,FormControl,Jumbotron} from 'react-bootstrap';
import Airtable from 'airtable';
import SmashModal from '../components/smashModal';
import Card from '../components/smashEvent';
import Switch from 'react-bootstrap-switch';
import Select from 'react-select';
import _ from 'underscore';
import Spinner from 'react-spinkit';
import 'react-select/dist/react-select.css';
import './react-bootstrap-switch.css';
import './events.css';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');
const CITY = [
	{ label: 'Edmonton', value: 'Edmonton' },
	{ label: 'Calgary', value: 'Calgary' },
	{ label: 'Others', value: 'Others' }
];
const GAMES = [
	{ label: 'Melee', value: 'melee' },
	{ label: 'Wii U', value: 's4' },
	{ label: 'Project M', value: 'project m' },
  { label: 'Smash 64', value: '64' }
];

class Event extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null,
      searchText: '',
      oldPost: false,
      city: '',
      games: [],
      complete:false
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
        this.setState({events: records, selected:records[0],complete:true});
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
          if(_.difference(this.state.games,event.get('events')).length === 0 || this.state.games.length === 0){
            if(event.get('City') === this.state.city || !this.state.city){
              return event.get('Name').toLowerCase().includes(this.state.searchText);
            }
          }
        }
        return false;
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
                <Select                    
                    simpleValue
                    value={this.state.city}
                    options={CITY}
                    placeholder="City"
                    onChange={ (value) => {
                      this.setState({city:value});
                    }}
                  />
              </FormGroup>
              <FormGroup>
                <Select
                    multi
                    simpleValue
                    value={this.state.games}
                    options={GAMES}
                    placeholder="Games"
                    onChange={ 
                      (value) => {
                        value = value ? value.split(',') : [];
                        this.setState({games:value});
                      }
                    }
                  />
              </FormGroup>
              <FormGroup>
                <h4 style={{textAlign:'right'}}>
                  View Old Events &nbsp;
                  <Switch
                    onText="Yes"
                    offText="No"
                    value={this.state.oldPost}
                    onChange={ () => {
                      this.setState({oldPost:!this.state.oldPost});
                      this.loadData();
                      }}
                  />
                </h4>
              </FormGroup>
            </Form>
          </Row>
          <br/>
          <Row>
            {
              filteredEvents.length > 0 ? 
                filteredEvents.map((event,index) => {
                      return (<div key={index} className="clickable"><Card event={event} open={this.open}/></div>)
                }) :              
                this.state.complete ? 
                  <h3>No Events Found...</h3> :
                  <div className="loadDiv">
                    <Spinner spinnerName='double-bounce' />
                  </div>
                  
            }
          </Row>
        </Jumbotron>
        <SmashModal showModal={this.state.showModal} selected={this.state.selected} open={this.open} close={this.close}/>
      </Grid>
    );
  }
}

export default Event;
