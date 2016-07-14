import { createSelector } from 'reselect';

/**
 * Direct selector to the reduxFormPage state domain
 */
const selectReduxFormPageDomain = () => state => {
  return {reduxFormPage: state.get('reduxFormPage')}  
};
/**
 * Other specific selectors
 */


/**
 * Default selector used by ReduxFormPage
 */

const selectReduxFormPage = () => createSelector(
  selectReduxFormPageDomain(),
  (substate) => substate
);

export default selectReduxFormPage;
export {
  selectReduxFormPageDomain,
};
