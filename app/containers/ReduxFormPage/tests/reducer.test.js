import expect from 'expect';
import reduxFormPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('reduxFormPageReducer', () => {
  it('returns the initial state', () => {
    expect(reduxFormPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
