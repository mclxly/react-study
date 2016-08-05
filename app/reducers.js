/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import Immutable, { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable'
import {reducer as notifications} from 'react-notification-system-redux';

import globalReducer from 'containers/App/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
import commentsDemoReducer from 'containers/CommentsDemo/reducer';
import todoPageReducer from 'containers/TodoPage/reducer';
import personContainerReducer from 'containers/PersonContainer/reducer';
import reduxFormPageReducer from 'containers/ReduxFormPage/reducer';

const immutableize = reducer => (state, action) =>
  fromJS(reducer(state ? state.toJS() : {}, action));

import loginPageReducer from 'containers/LoginPage/reducer';
export default function createReducer(asyncReducers) {
  let t = combineReducers({
    route: routeReducer,
    global: globalReducer,
    commentsDemo: commentsDemoReducer,
    todoPage: todoPageReducer,
    personContainer: personContainerReducer,
    form: formReducer,
    reduxFormPage: reduxFormPageReducer,
    loginPage: loginPageReducer,
    notifications: notifications,
    ...asyncReducers,
  });
  // console.log(t);
  return t;
}
