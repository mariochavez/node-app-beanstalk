import React from 'react';
import { browserHistory } from 'react-router'
import secondStore from '../../store/SecondStore';
import Navbar from '../shared/Navbar';

const SecondContainer = React.createClass ({
  getInitialState() {
    return {
      date: ''
    };
  },

  componentWillMount() {
    secondStore.getDate(data => {
      this.setState({
      	date: data
      });
    })
  },

  goToWellcome() {
    browserHistory.push('/');
  },

  render() {
    return <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Second Component</h1>
            <button onClick={this.goToWellcome} className="btn btn-primary">Go to wellcome</button>
            <h2>Server Time: {this.state.date}</h2>
          </div>
        </div>
      </div>
    </div>;
  }
});

export default SecondContainer;
