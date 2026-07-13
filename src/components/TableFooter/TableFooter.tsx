import * as React from 'react';
import MuiTableFooter from '@mui/material/TableFooter';

export interface TableFooterProps {
  /** The content of the component, normally TableRow. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-footer/
 * @uxpindescription The footer section of a Table, normally holding a TableRow with footer cells.
 */
export default function TableFooter(props: TableFooterProps) {
  return <MuiTableFooter {...props}>{props.children}</MuiTableFooter>;
}
