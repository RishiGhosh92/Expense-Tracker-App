import uuid from "uuid";
import database from "../firebase/firebase";

//component calls action generator
//action generator returns function
//component dispatches function(?)
//function runs(has ability to dispatch other actions and anything else)

//ADD EXPENSE Action generator
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//REMOVE EXPENSE Action generator
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT EXPENSE Action generator
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET EXPENSES Action generator
export const setExpenses = expenses => ({
  type: "SET_EXPENSE",
  expenses
});

export const startRemoveExpense = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

//1. Fetch all expense data once
//2. Parse data into an array
//3. Dispatch SET_EXPENSES
export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref("expenses")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
