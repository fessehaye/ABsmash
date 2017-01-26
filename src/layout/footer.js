import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import _ from 'underscore';
import './footer.css';

var footerlinks = [
  {name :"AB General Group", link:"https://goo.gl/vFu9Zn"},
  {name :"Edmonton Group", link:"https://goo.gl/OY8t40"},
  {name :"Calgary Group", link:"https://goo.gl/wBB43K"},
  {name :"Alberta Project M", link:"https://goo.gl/tU4HRc"},
  {name :"Alberta Smash 4", link:"https://goo.gl/fy0U8l"},
  {name :"Alberta Brawl", link:"https://goo.gl/sQm8cH"},
  {name :"Edmonton SSBM", link:"https://goo.gl/DlLDWo"},
  {name :"Edmonton 64", link:"https://goo.gl/uHgDFN"},
  {name :"Alberta Rivals of Aether", link:"https://goo.gl/vmUhaa"},
  {name :"Discord Server", link:"https://discord.gg/0qbRG0NJUawdBYcq"},
  {name :"Event Calendar", link:"https://goo.gl/OMNNhk"}
];

var footerGroups = _.groupBy(footerlinks, function(element, index){
  return (index+1) % 4;
});

footerGroups = _.toArray(footerGroups);

class Footer extends Component {

  render() {
    return (
      <div className="footerContainer">
        <div className="footer">
          <Grid>
            <footer>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <h3>Useful Links</h3>
              </div>
              <br/>
              <Row>
                {footerGroups.map((fgroup,index) => {
                  return (
                    <Col md={3} key={index}>
                      <div className="footer-link-list">
                        {fgroup.map((footer,index2) => {
                          return (<p onClick={() => {var win = window.open(footer.link, '_blank');
                          win.focus();}} key={index2}>{footer.name}</p>)
                        })}
                      </div>
                  </Col>)
                })}
              </Row>         
            </footer>
          </Grid>
        </div>
        <hr />
        <p>©SSBU 2017</p>
      </div>
    );
  }
}

export default Footer;