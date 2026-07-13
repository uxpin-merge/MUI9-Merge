import * as React from 'react';
import { SimpleTreeView as MuiSimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

export interface SimpleTreeViewProps {
  /** The content of the tree. Use TreeItem components. */
  children?: React.ReactNode;
  /** The ids of the items that are expanded by default (uncontrolled). */
  defaultExpandedItems?: string[];
  /** If true, multiple items can be selected. */
  multiSelect?: boolean;
  /** If true, the Tree View renders a checkbox at the left of its items' labels. */
  checkboxSelection?: boolean;
  /** If true, selection is disabled. */
  disableSelection?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-tree-view/simple-tree-view/items/
 * @uxpindescription The Simple Tree View displays a hierarchical list of TreeItem children.
 */
export default function SimpleTreeView(props: SimpleTreeViewProps) {
  return <MuiSimpleTreeView {...props}>{props.children}</MuiSimpleTreeView>;
}
