import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';

const styles = {
  root: {
  },
};

class Reactions extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="10" icon={<CommentIcon />} />
        <BottomNavigationAction label="100" icon={<ThumbUpIcon />} />
        <BottomNavigationAction label="5" icon={<ShareIcon />} />
      </BottomNavigation>
    );
  }
}

Reactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reactions);
