import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class CheckinForm extends Component {
  onSubmitHandler(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const {
      coords,
      handleSubmit,
      fields: { username, latitude, longitude }
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmitHandler.bind(this))}>
        <div className={`form-group ${username.touched && username.invalid ? 'has-error' : ''}`}>
          <label htmlFor="username">{this.props.label}</label>
          <input {...username} type="text" className="form-control" id="username" />
          <div className="text-danger">
            {username.touched ? username.error : ''}
          </div>
        </div>

        <div className={`form-group ${latitude.touched && latitude.invalid ? 'has-error' : ''}`}>
          <input {...latitude} type="hidden" name="latitude" value={coords ? coords.latitude : null} />
          <div className="text-danger">
            {latitude.touched ? latitude.error : ''}
          </div>
        </div>

        <div className={`form-group ${longitude.touched && longitude.invalid ? 'has-error' : ''}`}>
          <input {...longitude} type="hidden" name="longitude" value={coords ? coords.longitude : null} />
          <div className="text-danger">
            {longitude.touched ? longitude.error : ''}
          </div>
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

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please enter your name.';
  }
  if (values.username && values.username.length > 50) {
    errors.username = 'Only 50 charachters are allowed.';
  }
  if (values.username && !/^[A-z]+$/.test(values.username)) {
    errors.username = 'Only letters are allowed.';
  }
  if (values.latitude) {
    errors.latitude = 'Latitude is missing.';
  }
  if (values.longitude) {
    errors.longitude = 'Longitude is missing.';
  }

  return errors;
}

const CheckinReduxForm = reduxForm({
  validate,
  form: 'checkinForm',
  fields: ['username', 'latitude', 'longitude']
}, null)(CheckinForm);

export { CheckinReduxForm };
