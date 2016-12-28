import React from 'react';
import { browserHistory } from 'react-router'
import secondStore from '../../store/SecondStore';

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
    return <div className="container-fluid">
      <h1>Second Component</h1>
      <h2>Server Time: {this.state.date}</h2>
      <button onClick={this.goToWellcome}>Go to wellcome</button>
    </div>;
  }
});

export default SecondContainer;
