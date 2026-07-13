import * as React from 'react';
import MuiTableCell from '@mui/material/TableCell';

export interface TableCellProps {
  /** The content of the table cell. */
  children?: React.ReactNode;
  /** Set the text-align on the table cell content. Monetary or generally number fields should be right aligned. */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  /** Specify the cell type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components. */
  variant?: 'body' | 'footer' | 'head';
  /** The number of columns a cell should span. */
  colSpan?: number;
  /** The number of rows a cell should span. */
  rowSpan?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/table-cell/
 * @uxpindescription A cell of a TableRow. The variant defaults to the section (head, body, footer) it is placed in.
 */
export default function TableCell(props: TableCellProps) {
  return <MuiTableCell {...props}>{props.children}</MuiTableCell>;
}
