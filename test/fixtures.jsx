/**
 * Per-component escape hatches for the generic prop-render suite.
 * Keep this file SMALL — every entry is a deviation from "the preset renders
 * and every declared prop value renders", so each needs a reason.
 */
import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import Tabs from '@mui/material/Tabs';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

/** Extra context so components render where HTML/MUI requires it (DOM
 *  nesting rules; MUI contexts that are mandatory by design). */
export const wrappers = {
  TableBody: (el) => <table>{el}</table>,
  TableHead: (el) => <table>{el}</table>,
  TableFooter: (el) => <table>{el}</table>,
  TableRow: (el) => <table><tbody>{el}</tbody></table>,
  TableCell: (el) => <table><tbody><tr>{el}</tr></tbody></table>,
  ListItem: (el) => <ul>{el}</ul>,
  ListItemButton: (el) => <ul>{el}</ul>,
  ListItemAvatar: (el) => <ul><li>{el}</li></ul>,
  ListItemIcon: (el) => <ul><li>{el}</li></ul>,
  ListItemText: (el) => <ul><li>{el}</li></ul>,
  ListItemSecondaryAction: (el) => <ul><li>{el}</li></ul>,
  ListSubheader: (el) => <ul>{el}</ul>,
  ImageListItem: (el) => <ul>{el}</ul>,
  ImageListItemBar: (el) => <ul><li>{el}</li></ul>,
  // mandatory MUI parent contexts
  MenuItem: (el) => <MenuList>{el}</MenuList>,
  Tab: (el) => <Tabs value={false}>{el}</Tabs>,
  StepContent: (el) => (
    <Stepper orientation="vertical" activeStep={0}>
      <Step>{el}</Step>
    </Stepper>
  ),
  TreeItem: (el) => <SimpleTreeView>{el}</SimpleTreeView>,
};

/** Props excluded from the sweep for a component, with reasons. */
export const skipProps = {
  // open without a live anchorEl warns by design; jsdom has no layout to
  // anchor to — the preset covers the closed/open-with-anchor cases
  Menu: ['open'],
  // value must match one of the children's values — an arbitrary string is
  // invalid by contract; the preset covers value wiring
  Tabs: ['value'],
  // horizontal layout requires swapping the axis scale types in the same
  // change; sweeping the prop alone produces an invalid chart config
  BarChart: ['layout'],
};

/** Custom candidate values overriding the type-derived ones. */
export const propValues = {};

/** Components excluded entirely, with reasons. Should stay empty. */
export const skipComponents = {};
