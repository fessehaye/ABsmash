import React, { Component } from 'react';
import {Row,Jumbotron,Col,Glyphicon} from 'react-bootstrap';
import Carousel from '../components/smashCarousel';
import Airtable from 'airtable';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router';
import './index.css';

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
            {field: 'start date', direction: 'asc'}
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
     
        
          <Jumbotron className="jumbotron customJumbo" style={{textAlign:"center"}}>
            
              <Row>
                <h1 >Welcome To The Edmonton Smash Community</h1>
                <hr />
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <p>The Edmonton Super Smash Bros. community is home to active, talented, and 
                  welcoming scenes for every installment of the hit Nintendo series. Browse around to
                  find information on our events and our players, and how you can get involved!</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6} xs={12}>
                  <p>New to the community? Want to more about the competitive ruleset for your favorite game? Come check out our information section!</p>
                  <p><Link to="/info"><Glyphicon glyph="arrow-right" /> Learn More</Link ></p>
                </Col>
                <Col md={6} xs={12}>
                  <p>Ready to go to your first tourney? Forgot where the next out of city tourney is? Come check out our event section to be up to date!</p>
                  <p><Link to="/events"><Glyphicon glyph="arrow-right" /> Learn More</Link ></p>
                </Col> 
              </Row>
              <hr />
              <Row>
                <p>Learn about our growing organizations by joining our facebook group for further news and announcements!</p>
                <p>For any questions or inquires, please email us and we will get back to you.</p>
                <div className="socialList">
                  <SocialIcon url="https://www.facebook.com/groups/edmontonsmash/" />
                  <SocialIcon network="email" url="mailto:edmontonsmash@gmail.com" />
                  <SocialIcon url="https://www.youtube.com/user/SSBUniversity" />
                </div>           
              </Row>
            
          </Jumbotron>

      </div>
      
    );
  }
}

export default Main;
