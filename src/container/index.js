import React, { Component } from 'react';
import Airtable from 'airtable';
import './index.css';
import MainView from "../presentation/index";

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Main extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      complete:false,
      showModal: false,
      selected: null
    };
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


  render() {
    return <MainView
              close={this.close}
              open={this.open}
              {...this.state}
            />;
  }
}

export default Main;
