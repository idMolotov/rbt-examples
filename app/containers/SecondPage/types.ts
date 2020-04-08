import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface SecondPageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type SecondPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = SecondPageState;
type ContainerActions = SecondPageActions;

export { ContainerState, ContainerActions };
