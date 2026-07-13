import * as React from 'react';
import MuiTableRow from '@mui/material/TableRow';

export interface TableRowProps {
  /** Should be valid <tr> children such as TableCell. */
  children?: React.ReactNode;
  /** If true, the table row will shade on hover. */
  hover?: boolean;
  /** If true, the table row will have the selected shading. */
  selected?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-row/
 * @uxpindescription A row of a Table, holding TableCell components.
 */
export default function TableRow(props: TableRowProps) {
  return <MuiTableRow {...props}>{props.children}</MuiTableRow>;
}
