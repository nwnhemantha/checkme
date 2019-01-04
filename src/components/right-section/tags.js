
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LocalOffer from '@material-ui/icons/LocalOffer';
import '../index.scss';
import { connect } from 'react-redux';
import { fetchTags, selectTag } from '../../modules/tags';
import { unSelectCategory } from '../../modules/category';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    marginRight: "5px",
    background: "aqua",
    padding: "2px 10px",
    borderRadius: "7px",
    marginTop: "10px",
    cursor: "pointer"
  },
  icon: {
    fontSize: "15px"
  }

});

class Chips extends React.Component {
  state = {
    chipData: [],
  };

  componentDidMount(){
    this.props.fetchTags();
  }

  componentWillReceiveProps(np){
    const chipData = [];
    if(np.tags.tags){ 
      np.tags.tags.map( (value, key) => {
        chipData.push({
          key,
          label: value.tag
        });
      });
    }
    this.setState({ chipData})
  }

  onChange = (tag) => {
    this.props.unSelectCategory();
    this.props.selectTag(tag);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="Chips">
      
        {this.state.chipData.map(data => {
          let icon = null;

          return (
            <a onClick={this.onChange.bind(this,data.label)}  className={classes.chip}>{data.label} <LocalOffer className={classes.icon}/></a>
          );
        })}
      </div>
    );
  }
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  fetchTags,
  selectTag,
  unSelectCategory
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Chips));
