import * as React from 'react';

interface States {

}

export default class Events extends React.Component<{}, States> {

  constructor(props:{}){
    super(props);
  }

  render() {
  
    return (
        <div className="hello">
          events
        </div>
      );
    }
}