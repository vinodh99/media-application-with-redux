import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "container-fluid text-center">
      <Header />
      {this.props.children}
      </div>
    )
  }
}


App.propTypes = {
    children : PropTypes.object.isRequired

    // to 
  }

export default App;
