import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the secondPage state domain
 */

const selectSecondPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SecondPage
 */

const makeSelectSecondPage = () =>
  createSelector(selectSecondPageDomain, substate => substate);

export default makeSelectSecondPage;
export { selectSecondPageDomain };
