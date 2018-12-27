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
import { connect } from 'react-redux';
import { fetchPostDetails } from '../../modules/post';
import moment from 'moment';

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
    color: 'darkorchid'
  },
  duration: {
    color: "#0067bc"
  }
});

class detailsView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      post: null
    }
  }

  componentDidMount(){
    this.props.fetchPostDetails(this.props.postId)
  }

  componentWillReceiveProps(np){
    this.setState({ post: np.posts.postDetails})
  }

  goBack = valuse => {
    history.push('/')
  }

  render() {

    const { classes } = this.props;
    const { post } = this.state;

    console.log(post);

    if(!post) {
      return (
        <Typography component="span" className={classes.inline} color="textPrimary">
            loading...
          </Typography>
      )
    }

    let user = null;
    let image = null;
    if(post.User){
      user = post.User.name
      image = post.User.picture
    } else {
      user = `User_${ moment(post.created_at).unix() }`
    }


    return (
      <div>
      <Button variant="contained" color="primary" size="small" onClick={this.goBack} className={classes.button}>
          <CreateIcon /> go back
      </Button>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={image} />
          </ListItemAvatar>
          <ListItemText
            primary="Hope to buy a new panda car"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                { user } -  <span className={classes.duration}> { moment.duration(-moment().diff(moment(post.created_at), 'minutes'), "minutes").humanize(true) } </span>
                </Typography>
                <div>{` ${post.details}`} </div>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Divider light/>
      <Reactions post={post}/>
      <Divider light/>
      <Comments/>
      </div>
    );
  }
}
detailsView.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  fetchPostDetails
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(detailsView));
