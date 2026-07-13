import * as React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';

export interface TableProps {
  /** The content of the table, normally TableHead and TableBody. */
  children?: React.ReactNode;
  /** Allows TableCells to inherit size of the Table. */
  size?: 'small' | 'medium';
  /** Set the header sticky. */
  stickyHeader?: boolean;
  /** Allows TableCells to inherit padding of the Table. */
  padding?: 'checkbox' | 'none' | 'normal';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-table/
 * @uxpindescription Tables display sets of data. They can be fully customized. Rendered inside a TableContainer.
 */
export default function Table(props: TableProps) {
  return (
    <MuiTableContainer>
      <MuiTable {...props}>{props.children}</MuiTable>
    </MuiTableContainer>
  );
}
