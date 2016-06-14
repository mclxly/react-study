/*
 *
 * PersonContainer reducer
 *
 */

import { fromJS, Record, List } from 'immutable';
import {
  DEFAULT_ACTION,
  giveTreat,
} from './constants';

// -- Immutable Record Definitions --------------------------------- // 
const Pet = Record({ id: 0, name: '', treats: 0 });
const Person = Record({ name: '', pets: List([]) });

// -- Input data --------------------------------------------------- //
const pets = fromJS({
  '1': new Pet({ id: '1', name: 'Fido',  treats: 2 }),  
  '2': new Pet({ id: '2', name: 'Doggy', treats: 3 }),
  '3': new Pet({ id: '3', name: 'Jimmy', treats: 4 }),    
});

const people = fromJS({
  'ck': new Person({ name: 'Chris', pets: ['1', '3'] }),
  'mk': new Person({ name: 'Miki',  pets: ['2']      }),
});

const initialState = fromJS({
  people: people, 
  pets: pets
});

function personContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case 'giveTreat':
        return state.updateIn(['pets', action.id, 'treats'], treatCount => treatCount + 1);  
    default:
      return state;
  }
}

export default personContainerReducer;
