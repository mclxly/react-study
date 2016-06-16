/*
 *
 * ReduxFormPage actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function onSubmit(data) {
  console.log('onSubmit action');
  return { type: 'savedForm', data }
}
