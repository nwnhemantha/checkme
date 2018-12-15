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
import Comments from './comments';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginLeft: "-85%",
    backgroundColor: '#0cd2d4'
  },
  inline: {
    display: 'inline',
  },
});

class detailsView extends React.Component {

  onClick = valuse => {
    history.push('/details')
  }

  goBack = valuse => {
    history.push('/')
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
      <Button variant="contained" color="primary" size="small" onClick={this.goBack} className={classes.button}>
          <CreateIcon /> go back
      </Button>
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
                  2018-05-25
                </Typography>
                {` Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Divider light/>
      <Reactions />
      <Divider light/>
      <Comments/>
      </div>
    );
  }
}
detailsView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(detailsView);
