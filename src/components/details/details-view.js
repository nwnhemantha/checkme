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
import { fetchPostDetails, createComment } from '../../modules/post';
import { signIn } from '../../modules/user';
import moment from 'moment';
import TextareaAutosize from 'react-autosize-textarea';
import LocalOffer from '@material-ui/icons/LocalOffer';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginLeft: "-40%",
    backgroundColor: '#0cd2d4'
  },
  commentButton: {
    marginBottom: '6px',
    height: "43px",
    background: "#009688",
    width: "200px",
    
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
  commentBox: {
    width: "80%",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "15px",
    padding: "20px",
    minHeight: "100px"
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
  },
  google: {
    margin: '0px 15px'
  }
});

class detailsView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      post: null,
      comment: null,
      comments: [],
      isLogged: false,
      commentDone:false
    }
  }

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem("loggedUser"));

    if(user) {
        this.setState({ isLogged: true})
    }
    this.setState({commentDone:false})
    this.props.fetchPostDetails(this.props.postId)
  }

  componentWillReceiveProps(np){
    const { comments, commentDone } = this.state;
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    this.setState({ post: np.posts.postDetails, comments:  np.posts.postDetails.comments});

    if(np.posts.newComment && commentDone){
      let newComment = np.posts.newComment;
      let user = null;
      if(loggedUser) {
        user = loggedUser
    }
    newComment.User = user
     this.setState({ comments:[...comments, newComment], comment: ""});
     
      toast.success("You comment has been published");
     
     
    }

  }

  goBack = valuse => {
    window.location.replace('/')
  }


  comment = () => {
    const { post, comment, isLogged } = this.state;

    if(!comment){
      toast.error("You need to provide a comment");
      return false;
    }
    let user = null

    if(isLogged){
      user = JSON.parse(localStorage.getItem("loggedUser")).id;
    } 

    const data = {
      post_id: post.id,
      user_id: user,
      comment
    }
    this.setState({commentDone: true})
    this.props.createComment(data);
  }

  responseGoogle = (response) => {
    const data = {
        userData: {
                email:response.w3.U3,
                login_type:2,
                name: response.w3.ig,
                picture: response.w3.Paa,
        }
    }
    this.setState({ isLogged: true})
    this.props.signIn(data);
}

responseFacebook = (response) => {
         
  const data = {
      userData: {
              email:response.email,
              login_type:1,
              name: response.name,
              picture: response.picture.data.url
      }
  }
  this.setState({ isLogged: true})
  this.props.signIn(data);

}

  onChangeComment = (e) => {
    this.setState({ comment: e.target.value});
  }
  render() {

    const { classes } = this.props;
    const { post, isLogged, comments, comment} = this.state;


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
         <ToastContainer/>
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
      <Comments comments={comments}/>
      
      <TextareaAutosize
        onChange={this.onChangeComment}
        className={classes.commentBox}
        placeholder="type your comment here ..."
        maxRows={5}
        value={comment}
      />
      <br />
      <div>
          
      {!isLogged && <FacebookLogin
          appId="208836120062087"
          fields="name,email,picture"
          size="small"
          callback={this.responseFacebook} />
      }
      { !isLogged && <GoogleLogin
            clientId="778699611723-ioeo1poist5anu9spbaumlrh1fa0ejlu.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.responseGoogle}
            className={classes.google}
            />   }
        <Button variant="contained" color="primary" className={classes.commentButton} onClick={this.comment}>
          Comment
        </Button>
      </div>
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
  fetchPostDetails,
  signIn,
  createComment
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(detailsView));
