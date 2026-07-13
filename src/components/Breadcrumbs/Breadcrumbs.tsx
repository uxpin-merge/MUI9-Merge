import * as React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

export interface BreadcrumbsProps {
  /** The content of the component, normally Links and a Typography for the current page. */
  children?: React.ReactNode;
  /** Custom separator node. */
  separator?: React.ReactNode;
  /** Specifies the maximum number of breadcrumbs to display. When exceeded, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between. */
  maxItems?: number;
  /** If max items is exceeded, the number of items to show before the ellipsis. */
  itemsBeforeCollapse?: number;
  /** If max items is exceeded, the number of items to show after the ellipsis. */
  itemsAfterCollapse?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-breadcrumbs/
 * @uxpindescription Breadcrumbs consist of a list of links that help a user visualize a page's location within the site hierarchy.
 */
export default function Breadcrumbs(props: BreadcrumbsProps) {
  return <MuiBreadcrumbs {...props}>{props.children}</MuiBreadcrumbs>;
}
