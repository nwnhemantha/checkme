
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';
import '../index.scss';
import { connect } from 'react-redux';
import { fetchTags } from '../../modules/tags';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="Chips">
        {this.state.chipData.map(data => {
          let icon = null;

          return (
            <Chip
                key={data.key}
                label={data.label}
                className={classes.chip}
                color="primary"
                deleteIcon={<SearchIcon />}
                onClick={() => null}
                onDelete={() => null}
            />
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
  fetchTags
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Chips));
