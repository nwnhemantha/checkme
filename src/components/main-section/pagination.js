import React, { Component } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

class Pagination extends Component {
  render() {
    return (
      <div id="Pagination">
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={10}
            rowsPerPage={5}
            page={0}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={()=>null}
            onChangeRowsPerPage={()=> null}
          />
      </div>
    );
  }
}

export default Pagination;
