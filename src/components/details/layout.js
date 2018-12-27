import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.scss';
import DetailsView from './details-view';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Details extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      post: null
    }
  }


render(){
    const { classes } = this.props;
  
    return (
      <div className={classes.root} id="Details">
        <Grid container spacing={8}>
          <Grid item xs={1} />
          <Grid item xs>
            <Paper className={classes.paper}>
            <DetailsView postId={this.props.match.params.id}/>
            </Paper>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );

}

}
Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);
