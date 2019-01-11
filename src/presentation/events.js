import React from 'react';
import {Grid,Form,FormGroup,FormControl,Jumbotron} from 'react-bootstrap';
import SmashModal from '../components/smashModal';
import Card from '../components/smashEvent';
import Switch from 'react-bootstrap-switch';
import Select from 'react-select';
import _ from 'underscore';
import Spinner from 'react-spinkit';
import 'react-select/dist/react-select.css';

const CITY = [
	{ label: 'Edmonton', value: 'Edmonton' },
	{ label: 'Calgary', value: 'Calgary' },
	{ label: 'Others', value: 'Others' }
];
const GAMES = [
	{ label: 'Melee', value: 'melee' },
	{ label: 'Wii U', value: 's4' },
	{ label: 'Project M', value: 'project m' },
  	{ label: 'Smash 64', value: '64' },
	{ label: 'Ultimate', value: 'ultimate'}
];

const Event = props => {

    let filteredEvents= props.events.filter(
      (event) => {
        if(event){
          if(_.difference(props.games,event.get('events')).length === 0 || props.games.length === 0){
            if(event.get('City') === props.city || !props.city){
              return event.get('Name').toLowerCase().includes(props.searchText);
            }
          }
        }
        return false;
      }
    );

    return (
      <Grid>      
        <Jumbotron>
          <div>
            <Form>
              <FormGroup controlId="formInlineName">
                <FormControl 
                  type="text"
                  placeholder="Search"
                  value={props.searchText}
                  onChange={(e) => (
                    props.updateText(e)
                  )}
                  />
              </FormGroup>
              <FormGroup>
                <Select                    
                    simpleValue
                    value={props.city}
                    options={CITY}
                    placeholder="City"
                    onChange={ (value) => {
                      props.updateCity(value)
                    }}
                  />
              </FormGroup>
              <FormGroup>
                <Select
                    multi
                    simpleValue
                    value={props.games}
                    options={GAMES}
                    placeholder="Games"
                    onChange={ 
                      (value) => {
                        props.updateGames(value)
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
                    value={ props.oldPost }
                    onChange={ props.toggleHistory }
                  />
                </h4>
              </FormGroup>
            </Form>
          </div>
          <br/>
          <div>
            {
              filteredEvents.length > 0 ? 
                filteredEvents.map((event,index) => {
                      return (<div key={index} className="clickable"><Card event={event} open={props.open}/></div>)
                }) :              
                props.complete ? 
                  <h3 style={{textAlign: 'center',fontVariant:'small-caps'}}>No Events Found...</h3> :
                  <div className="loadDiv">
                    <Spinner spinnerName='double-bounce' />
                  </div>      
            }
          </div>
        </Jumbotron>
        <SmashModal showModal={props.showModal} selected={props.selected} open={props.open} close={props.close}/>
      </Grid>
    );
  
}

export default Event;
