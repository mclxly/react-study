import { createSelector } from 'reselect';

/**
 * Direct selector to the commentsDemo state domain
 */
const selectCommentsDemoDomain = () => state => state.get('commentsDemo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CommentsDemo
 */

const selectCommentsDemo = () => createSelector(
  selectCommentsDemoDomain(),
  (substate) => substate
);

export default selectCommentsDemo;
export {
  selectCommentsDemoDomain,
};
