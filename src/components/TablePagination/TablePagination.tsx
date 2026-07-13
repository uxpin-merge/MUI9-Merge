import * as React from 'react';
import MuiTablePagination from '@mui/material/TablePagination';

export interface TablePaginationProps {
  /** The total number of rows. To enable server side pagination for an unknown number of items, provide -1. */
  count?: number;
  /** The zero-based index of the current page. */
  page?: number;
  /** The number of rows per page. Set -1 to display all the rows. */
  rowsPerPage?: number;
  /** Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed. */
  rowsPerPageOptions?: number[];
  /** If true, show the first-page button. */
  showFirstButton?: boolean;
  /** If true, show the last-page button. */
  showLastButton?: boolean;
  /** Callback fired when the page is changed. */
  onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  /** Callback fired when the number of rows per page is changed. */
  onRowsPerPageChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-pagination/
 * @uxpindescription For the pagination of a large set of tabular data, use the TablePagination component.
 */
export default function TablePagination(props: TablePaginationProps) {
  const { count = 100, page = 0, rowsPerPage = 10, onPageChange, ...other } = props;
  return (
    <MuiTablePagination
      component="div"
      {...other}
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange ?? (() => undefined)}
    />
  );
}
