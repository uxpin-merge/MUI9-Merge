import * as React from 'react';
import MuiTableBody from '@mui/material/TableBody';

export interface TableBodyProps {
  /** The content of the component, normally TableRow. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-body/
 * @uxpindescription The body section of a Table, holding the data rows.
 */
export default function TableBody(props: TableBodyProps) {
  return <MuiTableBody {...props}>{props.children}</MuiTableBody>;
}
