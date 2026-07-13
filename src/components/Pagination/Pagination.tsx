import * as React from 'react';
import MuiPagination from '@mui/material/Pagination';

export interface PaginationProps {
  /** The total number of pages. */
  count?: number;
  /**
   * The current page. Unless you provide onChange handling, use defaultPage instead.
   * @uxpinbind onChange 1
   */
  page?: number;
  /** Callback fired when the page is changed. */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  /** The variant to use. */
  variant?: 'text' | 'outlined';
  /** The shape of the pagination items. */
  shape?: 'circular' | 'rounded';
  /** The active color. */
  color?: 'standard' | 'primary' | 'secondary';
  /** The size of the component. */
  size?: 'small' | 'medium' | 'large';
  /** Number of always visible pages before and after the current page. */
  siblingCount?: number;
  /** Number of always visible pages at the beginning and end. */
  boundaryCount?: number;
  /** If true, show the first-page button. */
  showFirstButton?: boolean;
  /** If true, show the last-page button. */
  showLastButton?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-pagination/
 * @uxpindescription The Pagination component enables the user to select a specific page from a range of pages.
 */
export default function Pagination(props: PaginationProps) {
  return <MuiPagination {...props} />;
}
