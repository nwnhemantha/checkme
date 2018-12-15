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
import Reactions from './reactions';

const styles = theme => ({
  root: {
    width: '75%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class Comments extends React.Component {

  onClick = valuse => {
    console.log('clicked')
    history.push('/details')
  }
  render() {

    const { classes } = this.props;

    return (
      <div> 

      <h3>
        Comments
      </h3>

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
                  kathy
                </Typography>
                {` Wherefrom "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" button onClick={this.onClick}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="http://vms.fnal.gov/stillphotos/2018/0000/18-0090-10.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Hope to buy a new panda car"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  kathy
                </Typography>
                {` Wherefrom "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      </div>
    );
  }
}
Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comments);
