import * as React from 'react';
import SimpleTreeView from '../SimpleTreeView';
import TreeItem from '../../TreeItem/TreeItem';

export default (
  <SimpleTreeView uxpId="simple-tree-view-1" defaultExpandedItems={['grid']} sx={{ minWidth: 250 }}>
    <TreeItem uxpId="tree-item-grid" itemId="grid" label="Data Grid">
      <TreeItem uxpId="tree-item-grid-community" itemId="grid-community" label="@mui/x-data-grid" />
      <TreeItem uxpId="tree-item-grid-pro" itemId="grid-pro" label="@mui/x-data-grid-pro" />
    </TreeItem>
    <TreeItem uxpId="tree-item-pickers" itemId="pickers" label="Date and Time Pickers">
      <TreeItem uxpId="tree-item-pickers-community" itemId="pickers-community" label="@mui/x-date-pickers" />
    </TreeItem>
    <TreeItem uxpId="tree-item-charts" itemId="charts" label="Charts">
      <TreeItem uxpId="tree-item-charts-community" itemId="charts-community" label="@mui/x-charts" />
    </TreeItem>
  </SimpleTreeView>
);
