import * as React from "react";

interface States {

}

export default class Main extends React.Component<{}, States> {

  constructor(props:{}){
    super(props);
  }

  render() {
  
    return (
        <div className="hello">
          mains testing
        </div>
      );
    }
}