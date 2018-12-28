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
import TextareaAutosize from 'react-autosize-textarea';
import LocalOffer from '@material-ui/icons/LocalOffer';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginLeft: "-40%",
    backgroundColor: '#0cd2d4'
  },
  inline: {
    display: 'inline',
    color: 'darkorchid'
  },
  duration: {
    color: "#0067bc"
  },
  details: {
    width: "100%",
    border: "none",
    paddingTop: "15px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "15px"
  },
  tags: {
    cursor: "pointer",
    float: "right",
    background: "aqua",
    padding: "2px 10px",
    borderRadius: "7px",
    marginRight: "10px",
  },
  icon: {
    fontSize: "15px"
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

console.log(post)
    return (
      <div>
      <Button variant="contained" color="primary" size="small" onClick={this.goBack} className={classes.button}>
          <CreateIcon /> go back
      </Button>
      
      {
          post.PostTags.map( (tag) => (
            <a className={classes.tags}>{tag.tag} <LocalOffer className={classes.icon}/></a>
          ))
      }
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={post.title}
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                { user } -  <span className={classes.duration}> { moment.duration(-moment().diff(moment(post.created_at), 'minutes'), "minutes").humanize(true) } </span>
                </Typography>
                <TextareaAutosize
                    className={classes.details}
                    placeholder={post.details}
                  />
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Divider light/>
      <Reactions post={post}/>
      <Divider light/>
      <Comments comments={post.comments}/>
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
