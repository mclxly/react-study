import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

const validate = values => {
  console.log(values);
  console.log(values.get('username'));
  let username = values.get('username');
  let email = values.get('email');
  let age = values.get('age');

  const errors = {}
  if (!username) {
    errors.username = 'Required'
  } else if (username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }
  if (!age) {
    errors.age = 'Required'
  } else if (isNaN(Number(age))) {
    errors.age = 'Must be a number'
  } else if (Number(age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const renderField = field => (
  <div>
    <label>{field.input.placeholder}</label>
    <div>
      <input {...field.input}/>
      {field.touched && field.error && <span>{field.error}</span>}
    </div>
  </div>
)

const SyncValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} placeholder="Username"/>
      <Field name="email" type="email" component={renderField} placeholder="Email"/>
      <Field name="age" type="number" component={renderField} placeholder="Age"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate                 // <--- validation function given to redux-form
})(SyncValidationForm)
