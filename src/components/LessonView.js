import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import YouTube from "react-youtube";

class LessonView extends React.Component {
  render() {
    const { name, description, videoId } = this.props.lesson;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1
      }
    };

    return (
      <Card>
        <CardContent>
          <Typography variant="headline" style={{ marginBottom: 5 }}>
            {name}
          </Typography>
          <Typography color="textSecondary" style={{ marginBottom: 20 }}>
            {description}
          </Typography>
          <div className="responsive">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={event => {
                // event.target.pauseVideo();
              }}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

LessonView.propTypes = {
  lesson: PropTypes.object.isRequired
};

export default LessonView;
