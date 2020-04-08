import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the newPage state domain
 */

const selectNewPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewPage
 */

const makeSelectNewPage = () =>
  createSelector(selectNewPageDomain, substate => substate);

export default makeSelectNewPage;
export { selectNewPageDomain };
