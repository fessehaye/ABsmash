import React from 'react';
import {Grid,Form,FormGroup,Jumbotron} from 'react-bootstrap';
import SmashModal from '../components/modalAnnouncement';
import Card from '../components/smashAnnouncement';
import Select from 'react-select';
import Spinner from 'react-spinkit';

const Audience = [
	{ label: 'Edmonton', value: 'Edmonton' },
	{ label: 'Calgary', value: 'Calgary' },
	{ label: 'Others', value: 'Others' },
    { label: 'General News', value: 'All' }
];

const Announcements  = props => {

    let filteredEvents= props.announcements.filter(
      (event) => {
        if(event){
          return (event.get('Audience') === props.Audience || !props.Audience)
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
                    value={props.Audience}
                    options={Audience}
                    placeholder="Audience"
                    onChange={(value) => 
                      props.updateAudience(value)
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
                      return (<div key={index} className="clickable"><Card announcement={announcement} open={props.open}/></div>)
                }) :
                props.complete ? 
                  <h3 style={{textAlign: 'center',fontVariant:'small-caps'}}>No Announcements Found...</h3> :
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

export default Announcements;
