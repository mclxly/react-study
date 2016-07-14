import { createSelector } from 'reselect';

/**
 * Direct selector to the personContainer state domain
 */
const selectPersonContainerDomain = () => state => state.get('personContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PersonContainer
 */

const selectPersonContainer = () => createSelector(
  selectPersonContainerDomain(),
  (substate) => substate
);

export default selectPersonContainer;
export {
  selectPersonContainerDomain,
};
