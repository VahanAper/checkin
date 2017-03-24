import React, { Component } from 'react';
import {
  Header,
  CheckinMap,
  CheckinButton,
  CheckinList,
  Modal
} from './components';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Check-in Yourself" />
        <div className="row">
          <CheckinMap lat={40.178115} lng={44.513244} zoom={17} />
        </div>
        <CheckinButton target="#checkin-modal" title="Check-in Now" />
        <CheckinList />
        <Modal header="Please enter your name" id="checkin-modal">
          <div>modal boody</div>
        </Modal>
      </div>
    );
  }
}
