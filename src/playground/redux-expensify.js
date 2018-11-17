import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD EXPENSE Action generator
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE EXPENSE Action generator
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT EXPENSE Action generator
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET TEXT FILTER Action generator
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT BY AMOUNT Action generator
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});

//SORT BY DATE Action generator
const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date"
});

//SET START DATE Action generator
const setStartDate = (startDate = "") => ({
  type: "SET_START_DATE",
  startDate
});

//SET END DATE Action generator
const setEndDate = (endDate = "") => ({
  type: "SET_END_DATE",
  endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

//Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt < endDate;
      const textMatch =
        typeof text !== "string" ||
        expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Create Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//Call Action Generator from dispatch
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setTextFilter("cof")); //Displays Coffee record
// store.dispatch(setTextFilter());
// store.dispatch(setStartDate(200)); //Displays Rent record
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

//console.log(expenseOne);

const demoState = {
  expenses: [
    {
      id: "sahdkjashd",
      description: "January Rent",
      note: "This was final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

//Object Spread Operator
const user = {
  name: "Rishi",
  age: 26
};
console.log({
  age: 24,
  ...user,
  location: "Chennai"
});
