import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import SecuredRoute from "./components/SecuredRoute/SecuredRoute";
import Dashboard from "./components/dashboard/Dashboard";
import auth0Client from "./Auth";
import Callback from "./Callback";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Open Sans"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  },
  palette: {
    primary: blue,
    secondary: pink,
    error: red
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === "/callback") return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === "login_required") return;
      console.log(err.error);
    }
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/callback" component={Callback} />
            <SecuredRoute path="/dashboard" component={Dashboard} />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
