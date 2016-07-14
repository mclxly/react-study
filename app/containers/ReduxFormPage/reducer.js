/*
 *
 * ReduxFormPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function reduxFormPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case 'savedForm':
      console.log('savedForm');
      console.log(action);
      return state.merge(action.data);
    default:
      return state;
  }
}

export default reduxFormPageReducer;
