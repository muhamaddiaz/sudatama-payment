import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  componentDidMount() {
    axios.put('https://sudatama.herokuapp.com/api/v1/body')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default App;
