import React, { Component } from 'react';

class CheckinButton extends Component {
  render() {
    return (
      <div className="checkin-button row">
        <div className="col-md-12">
          <button className="btn btn-primary">Check-in Now</button>
        </div>
      </div>
    );
  }
}

export { CheckinButton };
