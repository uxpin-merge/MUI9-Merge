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

/**
 * Props excluded from the "changes the rendered output" check only (they
 * still must RENDER cleanly). Every entry documents why no static markup
 * change is expected — mostly closed popups (no layout/hover in jsdom) and
 * props whose effect depends on another prop the preset doesn't set.
 */
export const effectSkipProps = {
  Autocomplete: { disableClearable: 'clear button shows only with a value/hover' },
  Avatar: { alt: 'alt applies to the img; preset renders text children' },
  BottomNavigation: { value: 'arbitrary value matches no action child' },
  BottomNavigationAction: { value: 'selection is driven by the parent value' },
  Breadcrumbs: {
    itemsAfterCollapse: 'collapse only kicks in past maxItems; preset has 3 crumbs',
    itemsBeforeCollapse: 'collapse only kicks in past maxItems; preset has 3 crumbs',
  },
  CardMedia: { src: 'alias of image; preset sets image which wins' },
  CircularProgress: { value: 'value applies to the determinate variant; preset is indeterminate' },
  DatePicker: {
    disableFuture: 'affects the calendar popup, closed in jsdom',
    disablePast: 'affects the calendar popup, closed in jsdom',
  },
  DateTimePicker: {
    disableFuture: 'affects the calendar popup, closed in jsdom',
    disablePast: 'affects the calendar popup, closed in jsdom',
  },
  TimePicker: {
    disableFuture: 'affects the clock popup, closed in jsdom',
    disablePast: 'affects the clock popup, closed in jsdom',
  },
  Drawer: {
    elevation: 'applies to the temporary variant; preset renders permanent',
    hideBackdrop: 'backdrop exists only for the open temporary variant',
  },
  FormControlLabel: { value: 'form value only — no visual representation' },
  InputAdornment: { disableTypography: 'wraps STRING children; preset uses an element' },
  LinearProgress: {
    value: 'applies to determinate/buffer; preset is indeterminate',
    valueBuffer: 'applies to the buffer variant; preset is indeterminate',
  },
  Masonry: { sequential: 'layout computed via ResizeObserver — mocked in jsdom', spacing: 'ditto' },
  Menu: {
    anchorEl: 'menu is closed in jsdom (no live anchor)',
    sx: 'menu is closed — nothing rendered to style',
    variant: 'menu is closed — nothing rendered',
  },
  MenuList: {
    disableListWrap: 'keyboard navigation behavior only',
    disabledItemsFocusable: 'focus behavior only',
  },
  Select: {
    autoWidth: 'affects the dropdown menu, closed in jsdom',
    displayEmpty: 'visible only with an empty value; preset has one',
  },
  Slide: { direction: 'transform exists only mid-transition; end state is identical' },
  SparkLineChart: {
    color: 'preset already uses the same primary token as the sample',
    showHighlight: 'highlight renders on pointer interaction',
    showTooltip: 'tooltip renders on pointer interaction',
  },
  SpeedDialAction: { tooltipPlacement: 'tooltip is closed until hover' },
  Tab: { value: 'selection is driven by the parent Tabs value' },
  TextField: { maxRows: 'applies to multiline; preset is single-line' },
  ToggleButtonGroup: { exclusive: 'selection semantics only, same markup' },
  Tooltip: {
    arrow: 'popup is closed until hover',
    placement: 'popup is closed until hover',
  },
};

/**
 * Props excluded from the controlled-update check (render A -> rerender B
 * must equal a fresh render of B). Reserved for transition-like props whose
 * mid-animation markup legitimately differs from a settled fresh render.
 */
export const updateSkipProps = {
  Accordion: { expanded: 'Collapse leaves imperative height residue after exit; visual state identical' },
  Collapse: { in: 'imperative height residue after exit; visual state identical' },
};

/**
 * Handler props excluded from the interaction smoke suite, with reasons —
 * cases where the generic trigger cannot reach the real interaction in
 * jsdom (closed popups, portalled targets, complex gestures).
 */
export const interactionSkips = {
  Autocomplete: { onChange: 'fires on option selection in the portalled listbox — needs real layout' },
  DatePicker: { onChange: 'fires on typing a valid date into the section fields — not generically scriptable' },
  DateTimePicker: { onChange: 'same as DatePicker' },
  TimePicker: { onChange: 'same as DatePicker' },
  Drawer: { onClose: 'preset renders the permanent variant — no close semantics' },
  Menu: { onClose: 'menu is closed in jsdom (no live anchor to open it)' },
  Select: {
    onChange: 'fires on option selection in the portalled menu — needs real layout',
    onClose: 'menu never opens in jsdom',
  },
  SpeedDial: { onClose: 'close is hover/blur-driven' },
};

/** Components excluded entirely, with reasons. Should stay empty. */
export const skipComponents = {};
