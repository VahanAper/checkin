import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div id={this.props.id} className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-center">{this.props.header}</h4>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
