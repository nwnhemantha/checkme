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
import { connect } from 'react-redux';
import { fetchPosts } from '../../modules/post';
import moment from 'moment';
import Pagination from './pagination';

const styles = theme => ({
  root: {
    width: '100%',
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

class FeedList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      postCount:0,
      limit: 10,
      offset: 0,
      page: 0,
      rowsPerPage: 10
    }
  }
  onClick = post => {
    console.log(post)
    history.push(`/details/${post.id}/${post.title}`);
  }

  componentDidMount(){
    const { limit, offset} = this.state;

    this.props.fetchPosts(limit, offset);
  }

  componentWillReceiveProps(np){
    
    if(np.posts){
       this.setState({ posts: np.posts.posts.post, postCount: np.posts.posts.postCount})
    }
   
  }

  onChangePage = (e, selected) => {
    const { limit, offset, page} = this.state;
    this.setState((prevState, props) => {
      if(page < selected){
        ++prevState.page;
        prevState.offset = prevState.offset + prevState.limit;
      } else {
        --prevState.page;
        prevState.offset = prevState.offset - prevState.limit 
      }

      return {page: prevState.page, offset: prevState.offset };
    }, () => this.props.fetchPosts(limit, this.state.offset))

    console.log(page, selected)
  }

  onChangeRowsPerPage = () => {
    console.log('onChangeRowsPerPage')
  }

  loadPosts = () => {
    const { classes } = this.props;
    if(this.state.posts){
      return this.state.posts.map((item, key) => {
        let user = null;
        let image = null;
        if(item.User){
          user = item.User.name
          image = item.User.picture
        } else {
          user = `User_${ moment(item.created_at).unix() }`
        }

        return (
          <ListItem alignItems="flex-start" button onClick={this.onClick.bind(this,item)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment classN>
                <Typography component="span" className={classes.inline} color="textPrimary">
                { user } -  <span className={classes.duration}> { moment.duration(-moment().diff(moment(item.created_at), 'minutes'), "minutes").humanize(true) } </span>
                </Typography>
                <div className="block-with-text">{` ${item.details.substring(0, 250)}`} </div>
              </React.Fragment>
            }
          />
        </ListItem>
        )
      })
    }
  }

  render() {

    const { classes } = this.props;
    const { postCount, rowsPerPage, page } = this.state;

    return (
      <List className={classes.root}>
        { this.loadPosts() }
        <Pagination 
          count={postCount}
          rowsPerPage={rowsPerPage}
          page={page} 
          onChangeRowsPerPage={this.onChangeRowsPerPage}
          onChangePage={this.onChangePage}
          />
      </List>
    );
  }
}
FeedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(FeedList));
