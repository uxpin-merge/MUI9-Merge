import * as React from 'react';
import { TreeItem as MuiTreeItem } from '@mui/x-tree-view/TreeItem';

export interface TreeItemProps {
  /** The id of the item. Must be unique within the tree. */
  itemId?: string;
  /** The label of the item. */
  label?: React.ReactNode;
  /** Nested TreeItem components. */
  children?: React.ReactNode;
  /** If true, the item is disabled. */
  disabled?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-tree-view/simple-tree-view/items/
 * @uxpindescription A single item of a SimpleTreeView. Nest TreeItems to build a hierarchy.
 */
export default function TreeItem(props: TreeItemProps) {
  const { itemId = 'tree-item', label = 'Tree item', ...other } = props;

  return (
    <MuiTreeItem {...other} itemId={itemId} label={label}>
      {props.children}
    </MuiTreeItem>
  );
}
