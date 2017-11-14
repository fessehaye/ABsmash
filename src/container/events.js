import React, { Component } from 'react';
import Airtable from 'airtable';
import EventView from '../presentation/events';

const base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

class Event extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      showModal: false,
      selected: null,
      searchText: '',
      oldPost: false,
      city: '',
      games: [],
      complete:false
    };

  }

  componentDidMount = () => {
    this.loadData();
  }

  loadData = () => {
    let query = {
        view: 'Main View',
        sort: [
            {field: 'Forced Order', direction: 'desc'},
            {field: 'start date', direction: 'asc'}
        ]
    }
    if(!this.state.oldPost){
      query.filterByFormula = 'AND(IS_BEFORE(TODAY(),{start date}),Approved = 1)';
    }
    base('Events').select(query).firstPage((err, records) => {
        if (err) { console.error(err); return; }
        this.setState({events: records, selected:records[0],complete:true});
    });
  }

  toggleHistory = () => {
    this.setState({oldPost:!this.state.oldPost});
    this.loadData();
  }

  updateCity = (value) => {
    this.setState({city:value});
  }

  updateGames = (value) => {
    value = value ? value.split(',') : [];
    this.setState({games:value});
  }

  updateText = (e) => {
    this.setState(
      {searchText:e.target.value.toLowerCase()}
    )
  } 

  open = (event) => {
    this.setState({
      showModal:true,
      selected:event
    });
  }

  close = () => {
    this.setState({
      showModal:false
    });
  }

  render() {
    return <EventView
      {...this.state}
      open={this.open}
      close={this.close}
      toggleHistory={this.toggleHistory}
      updateCity={this.updateCity}
      updateGames={this.updateGames}
      updateText={this.updateText}
    />
  }
}

export default Event;
