/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginPage from './selectors';
import styles from './styles.css';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.loginPage }>
      This is LoginPage container !
      </div>
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
