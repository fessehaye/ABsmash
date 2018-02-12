import * as React from 'react';

interface States {}

export default class Announcement extends React.Component<{}, States> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return <div className="hello">announcement</div>;
  }
}
