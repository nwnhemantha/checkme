import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.scss';
import Tags from './components/right-section/tags';
import CategoryList from './components/left-section/category-list';
import FeedList from './components/main-section/feedList';
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
  buttonMobile: {
    backgroundColor: '#0cd2d4'
  },
  paper: {
    padding: theme.spacing.unit * 0.5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {

  newPost = value => {
    window.location.replace('new-post');
  }

  componentDidMount(){
    this.loadAd1();
    this.loadAd2();
    this.loadAd3();
  }

  loadAd1(){
    if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
    var unit = {"calltype":"async[2]","publisher":"checkme","width":160,"height":600,"sid":"Chitika Default"};
    var placement_id = window.CHITIKA.units.length;
    window.CHITIKA.units.push(unit);
    console.log('111111111111111111111111111111',placement_id)
  }

  loadAd2(){
    if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
    var unit = {"calltype":"async[2]","publisher":"checkme","width":300,"height":250,"sid":"Chitika Default"};
    var placement_id = window.CHITIKA.units.length;
    window.CHITIKA.units.push(unit);
  }

  loadAd3(){
    if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
    var unit = {"calltype":"async[2]","publisher":"checkme","width":728,"height":90,"sid":"Chitika Default"};
    var placement_id = window.CHITIKA.units.length;
    window.CHITIKA.units.push(unit);
  }

render() {

  const { classes } = this.props;
  const isMobile = window.innerWidth < 720;
  const xs = isMobile? 9: 7;

  return (
    <div className={classes.root} id="App">
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div id={`chitikaAdBlock-1`}></div>
          <CategoryList />
          </Paper>
        </Grid>
        <Grid item xs={ xs }>
          <Paper className={classes.paper}>
          <Button variant="contained" color="primary" onClick={this.newPost} className={isMobile? classes.buttonMobile :classes.button}>
            <CreateIcon /> Add New Review or Question
          </Button>
          <div id={`chitikaAdBlock-2`} style={{marginTop: 15}}></div>
          <FeedList/>
         
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div id={`chitikaAdBlock-0`}></div>
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
