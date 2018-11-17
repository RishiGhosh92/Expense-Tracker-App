//Higher Order Component- A component that renders another component
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//Higher Order Component
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>This is private info. You are Authenticated</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>You need Authentication.Please Login to view Info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="This is the details" />,
  document.getElementById("app")
);
