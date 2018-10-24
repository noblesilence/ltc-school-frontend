import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import lessons from "./lessons.json";
import Lessons from "./Lessons";
import LessonView from "./LessonView";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 5
  },
  progress: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    display: "block"
  }
});

class School extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLessonIndex: 0
    };

    this.currentLessonIndexChanged = this.currentLessonIndexChanged.bind(this);
  }

  currentLessonIndexChanged(newIndex) {
    this.setState({ currentLessonIndex: newIndex });
  }

  render() {
    const currentLessonIndex = this.state.currentLessonIndex;
    const currentLesson = lessons[currentLessonIndex];
    const { classes } = this.props;

    return (
      <div className="App">
        <Navbar />
        <main className={classes.layout}>
          <Grid container spacing={40} className={classes.mainGrid}>
            <Grid item sm={4} xs={12}>
              <Lessons
                lessons={lessons}
                currentLessonIndex={currentLessonIndex}
                currentLessonIndexChanged={this.currentLessonIndexChanged}
              />
            </Grid>
            <Grid item sm={8} xs={12}>
              <LessonView lesson={currentLesson} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
}

export default withStyles(styles)(School);
