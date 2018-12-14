import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { history } from '../../index';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class FeedList extends React.Component {

  onClick = valuse => {
    console.log('clicked')
    history.push('/details')
  }
  render() {

    const { classes } = this.props;

    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start" button onClick={this.onClick}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="http://vms.fnal.gov/stillphotos/2018/0000/18-0090-10.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Hope to buy a new panda car"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  Ali Connors
                </Typography>
                {" - I am planning to buy a Micro Panda, a recenetly registered vehicle,please let me know the usage of the vehicle in fuel consumption and other spares.what could be the average price of a recently registered vehicle."}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLnvzlioOvMfplscPR5-EJT_VvN4Enw6QI1UaGBOXrQKmhxn5_w" />
          </ListItemAvatar>
          <ListItemText
            primary="Recommended Fuel for Axio hybrid 2017"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  to Scott, Alex, Jennifer
                </Typography>
                {" — In the near future I would like to buy scooteryamaha  fascino in the standard configuration. I liked this model appearance and the manufacturer is reliable. I think it would be comfortable to ride around town on this scooter. Tell me am I making a good choice? ..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR636ftCrTx63veKHKYGL5KzocPaiXr9N9SDgqR1gI3BsiuATmCig" />
          </ListItemAvatar>
          <ListItemText
            primary="Yamaha  Tzr125"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  Sandra Adams
                </Typography>
                {" — Hey guys, a friend of mine has been shopping around for a TZR125 for some time and through google and whatnot we found that most of the bikes in SL are from the 90's. Has anyone owned this particular bike and knows the problems etc that he should expect? He is a bit apprehensive because it is an old..."}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  }
}
FeedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedList);
