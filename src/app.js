import React, { Component } from 'react';
import {
  Header,
  GeoMap as CheckinMap,
  CheckinButton,
  CheckinList,
  Modal,
  CheckinForm
} from './components';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Check-in Yourself" />
        <div className="row">
          <CheckinMap zoom={17} />
        </div>
        <CheckinButton target="#checkin-modal" title="Check-in Now" />
        <CheckinList />
        <Modal header="Please enter your name" id="checkin-modal">
          <CheckinForm
            label="Name"
            submitText="Checkin"
            cancelText="Cancel"
          />
        </Modal>
      </div>
    );
  }
}
