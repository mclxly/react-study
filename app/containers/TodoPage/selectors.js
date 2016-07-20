import { createSelector } from 'reselect';

/**
 * Direct selector to the todoPage state domain
 */
const selectTodoPageDomain = () => state => {
  console.log('selectTodoPageDomain');
  console.log(state);
  console.log(state.get('todoPage'));
  return state.get('todoPage')
};

/**
 * Other specific selectors
 */
const getTodos  = () => createSelector(
  selectTodoPageDomain(),
  (substate) => {
    console.log('getTodos');
    console.log(substate);
    console.log(substate.todos);
    return substate.todos
  }
);

const getVisibilityFilter = () => createSelector(
  selectTodoPageDomain(),
  (substate) => {
    console.log('getVisibilityFilter');
    console.log(substate);
    console.log(substate.visibilityFilter);
    return substate.visibilityFilter
  }
);

const getVisibleTodos = () => createSelector(
  [ getVisibilityFilter(), getTodos() ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)

/**
 * Default selector used by TodoPage
 */

const selectTodoPage = () => createSelector(
  selectTodoPageDomain(),
  (substate) => substate
);

export default selectTodoPage;
export {
  getTodos,
  selectTodoPageDomain,
  getVisibleTodos,
};
