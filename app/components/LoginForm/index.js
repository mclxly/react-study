/**
*
* LoginForm
*
*/

import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

export const fields = [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ]

const renderField = field => (
  <div>
    <label>{field.input.placeholder}</label>
    <div>
      <input {...field.input}/>
      {field.touched && field.error && <span>{field.error}</span>}
    </div>
  </div>
)

class LoginForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} placeholder="Username"/>
        <Field name="email" type="email" component={renderField} placeholder="Email"/>
        <Field name="age" type="number" component={renderField} placeholder="Age"/>
        <div>
          <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
          <button className="btn btn-primary" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  // fields,
  // getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS() // <--- IMPORTANT PART
})(LoginForm)
