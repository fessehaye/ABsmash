import React, { Component } from 'react';
import Airtable from 'airtable';
import AnnounceView from '../presentation/announcement';

var base = new Airtable({apiKey: 'keyni5fwAIql6tjq9'}).base('app7lZ0g2Uh344gdT');

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
            {field: 'Created On', direction: 'desc'}
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

  updateAudience = (value) => {
    this.setState({Audience:value});
  }

  render() {
    return <AnnounceView
                {...this.state}
                updateAudience={this.updateAudience}
                open={this.open}
                close={this.close}
             />
  }
}

export default Announcements;
