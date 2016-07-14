/*
 *
 * ReduxFormPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';

import selectReduxFormPage from './selectors';
import styles from './styles.css';
import { onSubmit } from './actions';

export class ReduxFormPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleSubmit(e){
    // this.props.dispatch({type:'savedForm', data});
    console.log(e);
    // e.preventDefault();
    this.props.dispatch(onSubmit());
  }

  render() {
    const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
    console.log(this.props);
    return (
      <div className={ styles.reduxFormPage }>
        <form onSubmit={ handleSubmit(this.handleSubmit.bind(this)) }>
          <div>
            <label>First Name</label>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" {...email}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ReduxFormPage = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['firstName', 'lastName', 'email'], // all the fields in your form  
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS() // <--- IMPORTANT PART
})(ReduxFormPage);

const mapStateToProps = selectReduxFormPage();

function mapDispatchToProps(dispatch) {
  return {
    handleSubmitF: (evt) => {
      evt.preventDefault();
      dispatch(onSubmit());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormPage);


/*
两种提交form的方法：
1. handleSubmitF
2. handleSubmit
 */