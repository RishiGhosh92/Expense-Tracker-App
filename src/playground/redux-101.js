import { createStore } from "redux";

//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "Increment",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "Decrement",
  decrementBy
});

const resetCount = () => ({
  type: "Reset"
});

const setCount = ({ count = 0 } = {}) => ({
  type: "Set",
  count
});

//This function is a Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + action.incrementBy
      };
    case "Decrement":
      const decrementBy =
        typeof action.decrementby === "number" ? action.decrementby : 1;
      return {
        count: state.count - action.decrementBy
      };
    case "Set":
      return {
        count: action.count
      };
    case "Reset":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 100 }));

store.dispatch(decrementCount({ decrementBy: 10 }));
