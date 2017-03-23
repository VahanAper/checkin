import React, { Component } from 'react';
import {
  Header,
  CheckinMap
} from './components';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Check-in Yourself" />
        <CheckinMap lat={40.178115} lng={44.513244} zoom={17} />
      </div>
    );
  }
}
