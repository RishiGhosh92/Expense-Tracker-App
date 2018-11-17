// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";

const store = configureStore();

//Call Action Generator from dispatch
//addExpense -> Water Bill
store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 900 })
);
//addExpense -> Gas Bill
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 500, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 10950, createdAt: 900 })
);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
