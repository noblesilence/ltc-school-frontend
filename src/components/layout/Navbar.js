import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import auth0Client from "../../Auth";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../ltc-logo.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
});

function Navbar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  const DashboardLink = props => <Link to="/dashboard" {...props} />;

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              style={{ width: "40px", margin: "10px", display: "block" }}
              alt="Learn Teach Center Logo"
            />
          </Link>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Learn Teach Center School
          </Typography>
          {!auth0Client.isAuthenticated() && (
            <Fragment>
              <Button
                component={Link}
                to="register"
                color="inherit"
                variant="outlined"
              >
                Sign Up
              </Button>
              <Button color="inherit" onClick={auth0Client.signIn}>
                Login
              </Button>
            </Fragment>
          )}
          {auth0Client.isAuthenticated() && (
            <Fragment>
              <Button color="inherit" component={DashboardLink}>
                Courses
              </Button>
              <Button color="inherit" onClick={signOut()}>
                Logout
              </Button>
              <Typography>{auth0Client.getProfile().name}</Typography>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
