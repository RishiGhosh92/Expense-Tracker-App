import React, { Component } from "react";
import { connect } from "react-redux";
import getTotalExpenses from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

const ExpensesSummary = props => {
  const expenseWord = props.expenses.length === 1 ? "expense" : "expenses";
  return (
    <div>
      <h1>
        Viewing {props.expenses.length} {expenseWord} totalling{" "}
        {numeral(getTotalExpenses(props.expenses) / 100).format("$0,0.00")}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
