import React, { Component } from 'react';
import {Grid,Row,Form,FormGroup,Jumbotron} from 'react-bootstrap';
import Airtable from 'airtable';
import SmashModal from '../components/modalAnnouncement';
import Card from '../components/smashAnnouncement';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

const Audience = [
	{ label: 'Edmonton', value: 'Edmonton' },
	{ label: 'Calgary', value: 'Calgary' },
	{ label: 'Others', value: 'Others' },
    { label: 'All', value: 'All' }
];

class Announcements extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      announcements: [],
      showModal: false,
      selected: null,
      Audience: ''
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
            {field: 'Created On', direction: 'asc'}
        ]
    }
    
    query.filterByFormula = 'Approved = 1';
    
    base('Announcements').select(query).firstPage((err, records) => {
        if (err) { console.error(err); return; }
        this.setState({announcements: records, selected:records[0]});
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

    let filteredEvents= this.state.announcements.filter(
      (event) => {
        if(event){
          return (event.get('Audience') === this.state.Audience || !this.state.Audience)
        }
        return false;
      }
    );

    return (
      <Grid>      
        <Jumbotron>
          <Row>
            <Form>
              <FormGroup>
                <span style={{fontSize:16,width:'25%'}}>
                  &nbsp;Audience? 
                </span>
                <Select
                    simpleValue
                    value={this.state.Audience}
                    options={Audience}
                    onChange={ 
                      (value) => {
                        this.setState({Audience:value});
                      }
                    }
                  />
              </FormGroup>
            </Form>
          </Row>
          <br/>
          <Row>
            {
              filteredEvents.length > 0 ? 
                filteredEvents.map((announcement,index) => {
                      return (<div key={index} className="clickable"><Card announcement={announcement} open={this.open}/></div>)
                }) :
                <h3>No Announcements Found...</h3>
            }
          </Row>
        </Jumbotron>
        <SmashModal showModal={this.state.showModal} selected={this.state.selected} open={this.open} close={this.close}/>
      </Grid>
    );
  }
}

export default Announcements;
