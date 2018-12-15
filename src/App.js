import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.scss';
import Tags from './components/right-section/tags';
import CategoryList from './components/left-section/category-list';
import FeedList from './components/main-section/feedList';
import Pagination from './components/main-section/pagination';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import {history} from './index';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: '60%;',
    backgroundColor: '#0cd2d4'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {

  newPost = value => {
    history.push('new-post');
  }

render() {

  const { classes } = this.props;

  return (
    <div className={classes.root} id="App">
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <CategoryList />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
          <Button variant="contained" color="primary" onClick={this.newPost} className={classes.button}>
            <CreateIcon /> Add New Review or Question
          </Button>
          <FeedList/>
          <Pagination />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Tags />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
