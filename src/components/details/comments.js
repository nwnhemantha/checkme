import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const styles = theme => ({
  root: {
    width: '75%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    color: 'darkorchid'
  },
  duration: {
    color: "#0067bc"
  }
});

class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments: []
    }
  }
  
  componentDidMount(){
    this.setState({ comments: this.props.comments})
  }
  
  loadComments = () => {
    const {comments} = this.state;
    const { classes } = this.props;
    
    console.log('comments', comments)
    if (comments) {
      return comments.map( (comment) => {
        let user = null;
        let image = null;
        if(comment.User){
          user = comment.User.name
          image = comment.User.picture
        } else {
          user = `User_${ moment(comment.created_at).unix() }`
        }

          return (
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={image} />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                  { user } -  <span className={classes.duration}> { moment.duration(-moment().diff(moment(comment.created_at), 'minutes'), "minutes").humanize(true) } </span>
                  </Typography>
                  <div>{` ${comment.comment}`} </div>
                </React.Fragment>
              }
            />
          </ListItem>
          )
          
          } )
      }
  }


  render() {

    const { classes } = this.props;

    return (
      <div> 

      <h3>
        Comments
      </h3>

      <List className={classes.root}>
        { this.loadComments()}
      </List>
      </div>
    );
  }
}
Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comments);
