import expect from 'expect';
import commentsDemoReducer from '../reducer';
import { fromJS } from 'immutable';

describe('commentsDemoReducer', () => {
  it('returns the initial state', () => {
    expect(commentsDemoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
