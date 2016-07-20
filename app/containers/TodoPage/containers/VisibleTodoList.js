import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import selectTodoPage, {selectTodos, selectTodoPageDomain, getVisibleTodos} from '../selectors';
import { createSelector } from 'reselect';

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

// const mapStateToProps = selectTodos();
const mapStateToProps = createSelector(
  getVisibleTodos(),
  (todos) => ({ todos })
);
// (state) => {
//   console.log('mapStateToProps');
//   console.log(state);
//   console.log(getVisibleTodos(state));
//   return {
//     todos: getVisibleTodos(state)
//   }
//   return {
//     todos: getVisibleTodos(selectTodoPage().todos, state.visibilityFilter)
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList