import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';


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
  
  render() {
    const { classes } = this.props;
    return (
      <div className='new-post'>
        <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={""}
            onChange={()=>{}}
            name="category"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={""}>Select Category</MenuItem>
            <MenuItem value={1}>Vehicles</MenuItem>
          </Select>
        </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SelectCategory);
