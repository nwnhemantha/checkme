import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchCategories, selectCategory } from '../../modules/category';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});


class ListDividers extends Component {
  constructor(props){
      super(props);
      this.state = {
          categoryies: []
      }
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  componentWillReceiveProps(np){
    this.setState({ categoryies:np.category.categories })
  }

  loadCategory = () =>{
    if(this.state.categoryies){
      return this.state.categoryies.map( cat => (
        <ListItem button divider onClick={this.onChange.bind(this,cat.id)}>
          <ListItemText primary={cat.name} />
        </ListItem>
      ))
    }
  }

  onChange = (id) => {
    this.props.selectCategory(id);
  }
  render() {
  
    const { classes } = this.props;


    return (
      <List component="nav" className={classes.root}>
      <Divider />  
      {/* <ListItem button divider onClick={this.onChange.bind(this,0)}>
          <ListItemText primary="All" />
        </ListItem> */}
        { this.loadCategory() }
      <Divider />

        <div>
          <br />
          <div id="histats_counter"></div>
        </div>
      </List>
      );
  } 
}
ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  fetchCategories,
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(ListDividers));
