import React from 'react';
import { browserHistory } from 'react-router'

/**
 * MediaContainer
 */
const SecondContainer = React.createClass ({
  goToWellcome() {
    browserHistory.push('/');
  },

  render() {
    return <div className="container-fluid">
      <h1>Second Component</h1>
      <button onClick={this.goToWellcome}>Go to wellcome</button>
    </div>;
  }
});

export default SecondContainer;
