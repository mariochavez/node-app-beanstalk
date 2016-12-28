import React from 'react';
import { browserHistory } from 'react-router'

/**
 * MediaContainer
 */
const WellcomeContainer = React.createClass ({
  goToSecond() {
    browserHistory.push('/second');
  },

  render() {
    return <div className="container-fluid">
      <h1>Wellcome Component</h1>
      <button onClick={this.goToSecond}>Go to second</button>
    </div>;
  }
});

export default WellcomeContainer;
