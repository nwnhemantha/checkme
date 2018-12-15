
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';
import '../index.scss';

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
    chipData: [
      { key: 0, label: 'civic' },
      { key: 1, label: 'fb14' },
      { key: 2, label: 'honda' },
      { key: 3, label: 'car' },
      { key: 4, label: 'fuel' },
    ],
  };


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

export default withStyles(styles)(Chips);
