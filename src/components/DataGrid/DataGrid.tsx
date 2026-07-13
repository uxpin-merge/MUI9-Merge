import * as React from 'react';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridDensity } from '@mui/x-data-grid';

/** JSON-friendly column definition. */
export interface DataGridColumn {
  /** The field of the row object to display in this column. */
  field: string;
  /** The title of the column rendered in the column header. */
  headerName?: string;
  /** The width of the column in px. */
  width?: number;
  /** If set, the column takes a fraction of the remaining space (flex grow factor). */
  flex?: number;
  /** If true, the cells of the column are editable. */
  editable?: boolean;
  /** If false, the column is not sortable. */
  sortable?: boolean;
  /** The type of the column values. */
  type?: 'string' | 'number' | 'boolean';
  /** Cell content alignment. */
  align?: 'left' | 'center' | 'right';
  /** Header content alignment. */
  headerAlign?: 'left' | 'center' | 'right';
}

const defaultRows: object[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const defaultColumns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
];

export interface DataGridProps {
  /** The rows to display. An array of plain objects; each object must have a unique `id` field. */
  rows?: object[];
  /** The column definitions. An array of objects with at least a `field` property. */
  columns?: DataGridColumn[];
  /** If true, a checkbox column is added for row selection. */
  checkboxSelection?: boolean;
  /** The density of the grid rows. */
  density?: GridDensity;
  /** If true, the footer (pagination) is hidden. */
  hideFooter?: boolean;
  /** The page size options shown in the pagination footer. */
  pageSizeOptions?: number[];
  /** If true, the column menu is disabled. */
  disableColumnMenu?: boolean;
  /** If true, a loading overlay is displayed. */
  loading?: boolean;
  /** The width of the grid container in px. */
  width?: number;
  /** The height of the grid container in px. */
  height?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-data-grid/
 * @uxpindescription A fast and extendable data table that renders tabular data from rows and columns. Renders demo data when empty.
 */
export default function DataGrid(props: DataGridProps) {
  const {
    rows = defaultRows,
    columns = defaultColumns,
    width = 600,
    height = 400,
    sx,
    ...other
  } = props;

  return (
    <div style={{ width, height }}>
      <MuiDataGrid
        {...other}
        rows={rows as Array<{ id: number | string }>}
        columns={columns as GridColDef[]}
        sx={sx}
      />
    </div>
  );
}
