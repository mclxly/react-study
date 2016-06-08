import expect from 'expect';
import todoPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('todoPageReducer', () => {
  it('returns the initial state', () => {
    expect(todoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
