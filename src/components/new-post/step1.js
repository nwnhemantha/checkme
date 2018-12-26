import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { stat } from 'fs';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    marginTop: 0
  },
});


class SelectCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: null,
      selected: ""
    }
  }

  componentWillReceiveProps(np){
    console.log('4444444444444444444444', np)
    this.setState({categories:np.categories})
  }

  onChange = event => {
    this.props.onStep1Change(event.target.value)
    this.setState({selected: event.target.value})
  }

  loadCategories(){
    if(this.state.categories){
      return this.state.categories.map( cat => {
        return (
          <MenuItem value={cat.id}>{cat.name}</MenuItem>
        )
      })
    }  
  }

  render() {
    const { classes } = this.props;
    const { selected } = this.state;
    


    // console.log('____rerereerer_____', this.props);
    return (
      <div className='new-post'>
        <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={selected}
            onChange={this.onChange}
            name="category"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={""}>Select Category</MenuItem>
            {
              this.loadCategories()
            }
          </Select>
        </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SelectCategory);
