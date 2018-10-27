import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace("/dashboard");
  }

  render() {
    return <p>Loading...please wait</p>;
  }
}

export default withRouter(Callback);
