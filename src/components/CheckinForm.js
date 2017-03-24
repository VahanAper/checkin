import React, { Component } from 'react';

class CheckinForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username">{this.props.label}</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="form-group clearfix">
          <button type="submit" className="btn btn-success float-left">
            {this.props.submitText}
          </button>
          <button className="btn btn-secondary float-right" data-dismiss="modal">
            {this.props.cancelText}
          </button>
        </div>
      </form>
    );
  }
}

export { CheckinForm };
