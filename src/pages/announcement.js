import React, { Component } from 'react';
import {Grid,Form,FormGroup,Jumbotron} from 'react-bootstrap';
import Airtable from 'airtable';
import SmashModal from '../components/modalAnnouncement';
import Card from '../components/smashAnnouncement';
import Select from 'react-select';
import Spinner from 'react-spinkit';
import 'react-select/dist/react-select.css';


var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

const Audience = [
	{ label: 'Edmonton', value: 'Edmonton' },
	{ label: 'Calgary', value: 'Calgary' },
	{ label: 'Others', value: 'Others' },
    { label: 'General News', value: 'All' }
];

class Announcements extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      announcements: [],
      showModal: false,
      selected: null,
      Audience: '',
      complete: false
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
        this.setState({announcements: records, selected:records[0],complete:true});
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
          <div>
            <Form>
              <FormGroup>
                <Select
                    simpleValue
                    value={this.state.Audience}
                    options={Audience}
                    placeholder="Audience"
                    onChange={ 
                      (value) => {
                        this.setState({Audience:value});
                      }
                    }
                  />
              </FormGroup>
            </Form>
          </div>
          <br/>
          <div>
            {
              filteredEvents.length > 0 ? 
                filteredEvents.map((announcement,index) => {
                      return (<div key={index} className="clickable"><Card announcement={announcement} open={this.open}/></div>)
                }) :
                this.state.complete ? 
                  <h3 style={{textAlign: 'center',fontVariant:'small-caps'}}>No Announcements Found...</h3> :
                  <div className="loadDiv">
                    <Spinner spinnerName='double-bounce' />
                  </div>
            }
          </div>
        </Jumbotron>
        <SmashModal showModal={this.state.showModal} selected={this.state.selected} open={this.open} close={this.close}/>
      </Grid>
    );
  }
}

export default Announcements;
