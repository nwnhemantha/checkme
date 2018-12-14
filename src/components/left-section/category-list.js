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
      <ListItem button>
        <ListItemText primary="Vehicles" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Electronics" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Beauty Culture" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Sports" />
      </ListItem>
      <Divider />
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
