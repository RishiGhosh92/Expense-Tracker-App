import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink to="/dashboard" activeClassName="no-decoration">
          <h1 className="header__title">Expensify</h1>
        </NavLink>
        <button
          className="button-layout button--link"
          onClick={props.startLogout}
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
