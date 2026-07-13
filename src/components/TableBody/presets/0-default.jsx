import * as React from 'react';
import TableBody from '../TableBody';
import TableRow from '../../TableRow/TableRow';
import TableCell from '../../TableCell/TableCell';

export default (
  <TableBody uxpId="table-body-1">
    <TableRow uxpId="table-row-1">
      <TableCell uxpId="table-cell-1-1">Cell Data 1</TableCell>
      <TableCell uxpId="table-cell-1-2">Cell Data 2</TableCell>
      <TableCell uxpId="table-cell-1-3">Cell Data 3</TableCell>
    </TableRow>
    <TableRow uxpId="table-row-2">
      <TableCell uxpId="table-cell-2-1">Cell Data 1</TableCell>
      <TableCell uxpId="table-cell-2-2">Cell Data 2</TableCell>
      <TableCell uxpId="table-cell-2-3">Cell Data 3</TableCell>
    </TableRow>
  </TableBody>
);
