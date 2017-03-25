import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import {
  Header,
  CheckinMap,
  CheckinButton,
  CheckinList,
  Modal,
  CheckinForm
} from './components';

class App extends Component {
  renderGeolocation() {
    const { coords } = this.props;
    if (!this.props.coords) {
      return (
        <div className="col-md-8 col-md-offset-2 bg-warning text-warning no-geolocation">
          Please allow geolocation.
        </div>
      );
    }

    return <CheckinMap zoom={17} coords={coords} />;
  }

  render() {
    return (
      <div className="container">
        <Header title="Check-in Yourself" />
        <div className="row">
          {this.renderGeolocation()}
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

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(App);
