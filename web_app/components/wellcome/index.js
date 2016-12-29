import React from 'react';
import { browserHistory } from 'react-router';
import Navbar from '../shared/Navbar';

const WellcomeContainer = React.createClass ({
  goToSecond() {
    browserHistory.push('/second');
  },

  render() {
    return <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Wellcome Component</h1>
            <button onClick={this.goToSecond} className="btn btn-warning">Go to second</button>
          </div>
        </div>
      </div>
    </div>;
  }
});

export default WellcomeContainer;
