import React, { Component } from 'react';
import {Row,Jumbotron,Col,Glyphicon} from 'react-bootstrap';
import Carousel from '../components/smashCarousel';
import Airtable from 'airtable';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router';
import Spinner from 'react-spinkit';
import './index.css';
import announceLogo from './announcement.jpg';
import eventLogo from './event.jpg';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Main extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null,
      complete:false
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
        this.setState({events: records, selectedEvent:records[0],complete:true});
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
    let carousel = this.state.complete ? 
          <Carousel 
            events={this.state.events}
            showModal={this.state.showModal}
            open={this.open}
            close={this.close}
            selected={this.state.selected}
          /> :
          <div className="loadDiv">
            <Spinner spinnerName='double-bounce' />
          </div>;
    
    carousel = this.state.events.length > 0 ? carousel : null
    
    return (
      <div>
        {carousel }
          
          <Jumbotron className="jumbotron customJumbo" style={{textAlign:"center"}}>
            
              <Row>
                <h1 >Welcome To The Edmonton Smash Community</h1>
                <hr />
              </Row>
              <Row>
                <Col xs={12} md={4} mdOffset={1}>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}>
                    <p>The Edmonton Super Smash Bros. community is home to active, talented, and 
                    welcoming scenes for every installment of the hit Nintendo series. Browse around to
                    find information on our events and our players, and how you can get involved!</p>

                    <p>
                      Edmonton’s Smash Bros community is a welcoming
                      place that appeals to new gamers and seasoned
                      players alike. Impressively, the club has been
                      running ten years strong, attracting some of the best
                      competitive talent in Western Canada, and involving
                      60-70 players weekly.
                    </p>
                  </div>

                </Col>
                <Col xs={12} md={6}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="//www.youtube.com/embed/eKreSx4wS1Y"></iframe>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={6} xs={12}>
                  <div className="home-card">
                    <div className="bg">
                      <div className="content">
                        <p>
                          New to the community? Want to learn more about the competitive ruleset for your favorite game? Come check out our information section!
                        </p>
                        <Link to="/info"> <button >Learn More</button></Link >
                      </div>
                    </div>
                    <img src={announceLogo}/>>
                  </div>
                </Col>
                <Col md={6} xs={12}>
                  <div className="home-card2">
                      <div className="bg">
                        <div className="content">
                          <p>
                            Ready to go to your first tourney? Forgot where the next out of city tourney is? Come check out our event section to be up to date!
                          </p>
                          <Link to="/events"> <button >Learn More</button></Link >
                        </div>
                      </div>
                      <img src={eventLogo}/>>
                  </div>
                </Col> 
              </Row>
              <hr />
              <Row>
                <p>Learn about our growing organizations by joining our facebook group for further news and announcements!</p>
                <p>For any questions or inquires, please email us and we will get back to you.</p>
                <div className="socialList">
                  <SocialIcon url="https://www.facebook.com/groups/edmontonsmash/" color="#1986FF"/>
                  <SocialIcon network="email" url="mailto:edmontonsmash@gmail.com" color="#1986FF"/>
                  <SocialIcon url="https://www.youtube.com/user/SSBUniversity" color="#1986FF"/>
                </div>           
              </Row>
            
          </Jumbotron>

      </div>
      
    );
  }
}

export default Main;
