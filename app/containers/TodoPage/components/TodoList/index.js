/**
*
* TodoList
*
*/

import React from 'react';

import styles from './styles.css';
import Immutable, { fromJS } from 'immutable';
import Todo from '../Todo';

function TodoList(props) {
  // const { todos, toggleTodo, onTodoClick } = props;
  const { todos, onTodoClick } = props;

  console.log('TodoList');
  console.log(props);
  if (todos.length === 0) {
    return <div>Add Todos</div>
  }
  return (
    <ul className={ styles.todoList }>
      {todos.map((todo,i) =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      )}
    </ul>
  );
}

export default TodoList;
