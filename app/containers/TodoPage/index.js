/*
 *
 * TodoPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import {selectTodoPage, selectTodos} from './selectors';
import {addTodo} from './actions';
import styles from './styles.css';

import PersonContainer from 'containers/PersonContainer';
import AddTodoForm from './components/AddTodoForm';
import VisibleTodoList from './containers/VisibleTodoList';
import LinkList from './components/LinkList';

export class TodoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let { onSubmit } = this.props;
    console.log('render');
    console.log(this.props);
    return (
      <div className={ styles.todoPage }>
        <AddTodoForm onSubmit = {onSubmit}/>        
        <VisibleTodoList />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     todos: selectTodos(state)
//   }
// }
// console.log(mapStateToProps);

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    },
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TodoPage);
