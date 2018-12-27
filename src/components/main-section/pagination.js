import React, { Component } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

class Pagination extends Component {


  componentDidMount(){

  }

  render() {
    return (
      <div id="Pagination">
        <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={this.props.count}
            rowsPerPage={this.props.rowsPerPage}
            page={this.props.page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.props.onChangePage}
            onChangeRowsPerPage={this.props.onChangeRowsPerPage}
          />
      </div>
    );
  }
}

export default Pagination;
