import * as React from 'react';
import MuiTableContainer from '@mui/material/TableContainer';

export interface TableContainerProps {
  /** The content of the component, normally a Table. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-container/
 * @uxpindescription A container for a Table that provides horizontal scrolling.
 */
export default function TableContainer(props: TableContainerProps) {
  return <MuiTableContainer {...props}>{props.children}</MuiTableContainer>;
}
