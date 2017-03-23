import React, { Component } from 'react';

class CheckinList extends Component {
  state = {
    users: [
      {
        name: 'John Doe',
        coords: '1km',
        datetime: Date.now()
      },
      {
        name: 'Lorem Impsum',
        coords: '2km',
        datetime: Date.now()
      },
      {
        name: 'Foo Bar',
        coords: '3km',
        datetime: Date.now()
      }
    ]
  };

  renderRows() {
    return this.state.users.map((user, index) => {
      return (
        <div key={`user_${index}`} className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="row list-item">
              <div className="col-md-4">{user.name}</div>
              <div className="col-md-4">{user.coords}</div>
              <div className="col-md-4">{user.datetime}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="checkin-list row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Recent check-ins near by</h2>
          <hr />
        </div>
        {this.renderRows()}
      </div>
    );
  }
}

export { CheckinList };
