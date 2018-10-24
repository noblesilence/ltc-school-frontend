import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

class Lessons extends Component {
  render() {
    const lessonItems = this.props.lessons.map((lesson, index) => (
      <LessonMenuItem
        key={index}
        index={index}
        name={lesson.name}
        description={lesson.description}
        selected={this.props.currentLessonIndex === index}
        onClick={this.props.currentLessonIndexChanged}
      />
    ));

    return (
      <Fragment>
        <Typography variant="headline">Lessons</Typography>
        <List component="nav">{lessonItems}</List>
      </Fragment>
    );
  }
}

const LessonMenuItem = props => {
  return (
    <MenuItem
      style={{ minHeight: "50px", lineHeight: "50px" }}
      selected={props.selected}
      onClick={() => props.onClick(props.index)}
    >
      <ListItemText primary={props.name} secondary={props.description} />
    </MenuItem>
  );
};

export default Lessons;
