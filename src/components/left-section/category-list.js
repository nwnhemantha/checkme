import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});

function ListDividers(props) {
  
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
     <Divider />
      <ListItem button divider>
        <ListItemText primary="Vehicles" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Electronics" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Beauty Culture" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Sports" />
      </ListItem>
      <Divider />

      <div>
        <br />
        <div id="histats_counter"></div>
      </div>
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
