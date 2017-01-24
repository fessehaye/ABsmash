import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>©SSBU 2017</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;