import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Navbar from "./layout/Navbar";
import Lessons from "./components/Lessons";
import LessonView from "./components/LessonView";
import { getLessons } from "./actions/lessonActions";

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

  componentDidMount() {
    this.props.getLessons();

    // axios
    //   .get(
    //     "https://tdpcw5gdob.execute-api.us-east-1.amazonaws.com/latest/lessons"
    //   )
    //   .then(res => this.setState({ lessons: res.data }))
    //   .catch(err => console.log(err));
  }

  currentLessonIndexChanged(newIndex) {
    this.setState({ currentLessonIndex: newIndex });
  }

  render() {
    const { classes } = this.props;
    const { lessons } = this.props.lessons;

    let dashboardContent;

    if (lessons === null) {
      dashboardContent = (
        <CircularProgress
          className={classes.progress}
          color="secondary"
          size={50}
        />
      );
    } else {
      console.log(lessons);

      const currentLessonIndex = this.state.currentLessonIndex;
      const currentLesson = lessons[currentLessonIndex];

      dashboardContent = (
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
      );
    }

    return (
      <div className="App">
        <Navbar />
        <main className={classes.layout}>{dashboardContent}</main>
      </div>
    );
  }

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
}

School.propTypes = {
  getLessons: PropTypes.func.isRequired,
  lessons: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lessons: state.lessons
});

export default connect(
  mapStateToProps,
  { getLessons }
)(withStyles(styles)(School));
