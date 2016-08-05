/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectNoti = () => (state) => state.get('notifications');

const selectUsername = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('username')
);

export {
  selectHome,
  selectUsername,
  selectNoti,
};
