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
    },
    title: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "75%",
  }
});


class PostInput extends Component {
  
  constructor(props){
    super(props);
    this.state = {}
  }

  onChange = event => {
    this.props.onStep2Change(event.target.value);
  }

  onChangeTitle = event => {
    this.props.onStep2ChangeTitle(event.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <TextField
          label="Title"
          placeholder="Post title here"
          className={classes.title}
          margin="normal"
          variant="outlined"
          onChange={this.onChangeTitle}
        />
        <br/>
        <TextField
          id="textarea"
          label="Your review"
          placeholder="Your review here"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PostInput);
