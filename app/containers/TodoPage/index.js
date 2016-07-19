/*
 *
 * TodoPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoPage from './selectors';
import styles from './styles.css';

import PersonContainer from 'containers/PersonContainer';
import AddTodoForm from 'components/AddTodoForm';

export class TodoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.todoPage }>
        <AddTodoForm />
        <PersonContainer />
      </div>
    );
  }
}

const mapStateToProps = selectTodoPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
