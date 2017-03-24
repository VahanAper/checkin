import React, { Component } from 'react';

class CheckinButton extends Component {
  render() {
    return (
      <div className="checkin-button row">
        <div className="col-md-12">
          <button className="btn btn-primary" data-toggle="modal" data-target={this.props.target}>
            {this.props.title}
          </button>
        </div>
      </div>
    );
  }
}

export { CheckinButton };
