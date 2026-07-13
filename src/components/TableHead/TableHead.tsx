import * as React from 'react';
import MuiTableHead from '@mui/material/TableHead';

export interface TableHeadProps {
  /** The content of the component, normally TableRow. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-head/
 * @uxpindescription The head section of a Table, normally holding a TableRow with header cells.
 */
export default function TableHead(props: TableHeadProps) {
  return <MuiTableHead {...props}>{props.children}</MuiTableHead>;
}
