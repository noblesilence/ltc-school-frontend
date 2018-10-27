import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import auth0Client from "../../Auth";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Typography
            variant="display3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Learn Teach Center School
          </Typography>
          <Typography
            variant="title"
            align="center"
            color="textSecondary"
            component="p"
          >
            Online School by Learn Teach Center
          </Typography>
          <Grid
            style={{ padding: 30 }}
            container
            spacing={24}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={6}>
              <Button
                onClick={auth0Client.signIn}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
              <Button
                onClick={auth0Client.signIn}
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </main>
    );
  }
}

export default connect(null)(withStyles(styles)(Landing));
