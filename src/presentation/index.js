import React from 'react';
import {Row,Jumbotron,Col} from 'react-bootstrap';
import Carousel from '../components/smashCarousel';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router';
import Spinner from 'react-spinkit';
import announceLogo from '../assets/announcement.jpg';
import eventLogo from '../assets/case.jpg';
import jtLogo from '../assets/event.jpg';


const Main = props => {

  let carousel = props.complete ? 
          <Carousel 
            events={props.events}
            showModal={props.showModal}
            open={props.open}
            close={props.close}
            selected={props.selected}
          /> :
          <div className="loadDiv">
            <Spinner spinnerName='double-bounce' />
          </div>;
    
    carousel = props.events.length > 0 ? carousel : null
    
    return (
      <div>
        { carousel }
          
          <Jumbotron className="jumbotron customJumbo" style={{textAlign:"center"}}>
            
              <Row>
                <h1 >Welcome To The Edmonton Smash Community</h1>
                <hr />
              </Row>
              <Row style={{marginBottom:20}}>
                <Col xs={12} md={4} mdOffset={1}>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}>
                    <p>The Edmonton Smash Bros. Community is home to active, talented, and 
                    welcoming scenes for every installment of the hit Nintendo series. Browse around to
                    find information on our events and our players, and how you can get involved!</p>

                    <p>
                      Edmonton’s Smash Bros Community is a welcoming
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
              <Row>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                  <div className="home-card">
                    <div className="bg">
                      <div className="content">
                        <p>
                          New to the community? Want to learn more about the competitive ruleset for your favorite game? Come check out our information section!
                        </p>
                        <Link to="/info"> <button >Learn More</button></Link >
                      </div>
                    </div>
                    <img src={announceLogo} role="presentation"/>>
                  </div>
                  <div className="home-card2">
                      <div className="bg">
                        <div className="content">
                          <p>
                            Ready to go to your first tourney? Forgot where the next out of city tourney is? Come check out our event section to be up to date!
                          </p>
                          <Link to="/events"> <button >Learn More</button></Link >
                        </div>
                      </div>
                      <img src={eventLogo} role="presentation"/>>
                  </div>
                </div> 
              </Row>
              <Row>
                  <div className="home-card">
                        <div className="bg">
                          <div className="content">
                            <p>
                              Learn about our growing organizations by joining our facebook group for further news and announcements! For any questions or inquires, please email us and we will get back to you.
                            </p>
                            <div className="socialList">
                              <SocialIcon url="https://www.facebook.com/groups/edmontonsmash/" color="#1986FF"/>
                              <SocialIcon network="email" url="mailto:edmontonsmash@gmail.com" color="#1986FF"/>
                              <SocialIcon url="https://www.youtube.com/user/SSBUniversity" color="#1986FF"/>
                            </div>  
                          </div>
                        </div>
                        <img src={jtLogo} role="presentation"/>>
                  </div>       
              </Row>
            
          </Jumbotron>

      </div>
      
    );
}

export default Main;
