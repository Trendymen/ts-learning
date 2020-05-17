import { Action, createStore, Reducer } from "redux";

enum ActionType {
  INCREASE = "INCREASE_ACTION",
  DECREASE = "DECREASE_ACTION",
}

type INCREASE_ACTION = {
  type: ActionType.INCREASE;
};

type DECREASE_ACTION = {
  type: ActionType.DECREASE;
};

const counter: Reducer<number, Action<ActionType>> = (state = 0, action) => {
  switch (action.type) {
    case ActionType.INCREASE:
      return state + 1;
    case ActionType.DECREASE:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: ActionType.INCREASE,
});
