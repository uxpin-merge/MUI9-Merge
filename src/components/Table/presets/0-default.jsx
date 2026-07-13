import * as React from 'react';
import Table from '../Table';
import TableHead from '../../TableHead/TableHead';
import TableBody from '../../TableBody/TableBody';
import TableRow from '../../TableRow/TableRow';
import TableCell from '../../TableCell/TableCell';
import Typography from '../../Typography/Typography';

export default (
  <Table uxpId="table-1">
    <TableHead uxpId="table-head-1">
      <TableRow uxpId="table-row-0">
        <TableCell uxpId="table-cell-0-0">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }} uxpId="typography-0">
            Dessert (100g serving)
          </Typography>
        </TableCell>
        <TableCell uxpId="table-cell-0-1">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }} uxpId="typography-1">
            Calories
          </Typography>
        </TableCell>
        <TableCell uxpId="table-cell-0-2">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }} uxpId="typography-2">
            Fat (g)
          </Typography>
        </TableCell>
        <TableCell uxpId="table-cell-0-3">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }} uxpId="typography-3">
            Carbs (g)
          </Typography>
        </TableCell>
        <TableCell uxpId="table-cell-0-4">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }} uxpId="typography-4">
            Protein (g)
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody uxpId="table-body-1">
      <TableRow uxpId="table-row-1">
        <TableCell uxpId="table-cell-1-0">Ice Cream</TableCell>
        <TableCell uxpId="table-cell-1-1">237</TableCell>
        <TableCell uxpId="table-cell-1-2">9</TableCell>
        <TableCell uxpId="table-cell-1-3">37</TableCell>
        <TableCell uxpId="table-cell-1-4">4.9</TableCell>
      </TableRow>
      <TableRow uxpId="table-row-2">
        <TableCell uxpId="table-cell-2-0">Cupcake</TableCell>
        <TableCell uxpId="table-cell-2-1">305</TableCell>
        <TableCell uxpId="table-cell-2-2">3.7</TableCell>
        <TableCell uxpId="table-cell-2-3">67</TableCell>
        <TableCell uxpId="table-cell-2-4">4.3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
