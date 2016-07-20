/*
 *
 * TodoPage actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  // VisibilityFilters,
} from './constants';

let nextTodoId = 0

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/*
Todo Container: action creators
 */
export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}