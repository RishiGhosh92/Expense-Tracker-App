import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to get your expenses under control</p>
          <button className="button-layout" onClick={this.props.startLogin}>
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}

// export const LoginPage = ({ startLogin }) => (
//   <div>
//     <button onClick={startLogin}>Login</button>
//   </div>
// );

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
