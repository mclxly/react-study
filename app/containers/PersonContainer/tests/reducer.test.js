import expect from 'expect';
import personContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('personContainerReducer', () => {
  it('returns the initial state', () => {
    expect(personContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
