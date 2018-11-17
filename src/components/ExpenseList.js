import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    <div>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters
  };
};

// const mapStateToProps = state => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters
//   };
// };

export default connect(mapStateToProps)(ExpenseList);
