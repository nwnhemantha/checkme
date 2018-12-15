import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        width: '100%',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "75%",
    }
});


class PostInput extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          id="textarea"
          label="Your review"
          placeholder="Your review here"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(styles)(PostInput);
