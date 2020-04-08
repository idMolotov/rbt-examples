import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface NewPageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type NewPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = NewPageState;
type ContainerActions = NewPageActions;

export { ContainerState, ContainerActions };
