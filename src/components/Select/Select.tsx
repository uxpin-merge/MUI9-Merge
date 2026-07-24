import * as React from 'react';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';

export interface SelectProps {
  /** The option elements to populate the select with: MenuItem elements. */
  children?: React.ReactNode;
  /**
   * The input value. Provide an array when multiple is true.
   * @uxpinbind onChange 0.target.value
   */
  value?: string | string[];
  /** The default value. Use when the component is not controlled. */
  defaultValue?: string | string[];
  /** The label of the component. Pair with an InputLabel inside a FormControl for the floating label. */
  label?: string;
  /** The variant to use. */
  variant?: 'filled' | 'outlined' | 'standard';
  /** The size of the component. */
  size?: 'small' | 'medium';
  /** If true, the input takes up the full width of its container. */
  fullWidth?: boolean;
  /** If true, value must be an array and the menu supports multiple selections. */
  multiple?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the component is displayed in an error state. */
  error?: boolean;
  /** If true, a value is displayed even if no items are selected. */
  displayEmpty?: boolean;
  /** If true, the width of the popover automatically matches the items inside the menu. */
  autoWidth?: boolean;
  /** If true, the dropdown is shown (controlled mode). */
  open?: boolean;
  /** The id of the wrapper element. */
  id?: string;
  /** Callback fired when a menu item is selected. Pull the new value from event.target.value. */
  onChange?: (event: SelectChangeEvent<string | string[]>, child: React.ReactNode) => void;
  /** Callback fired when the component requests to be opened (controlled mode). */
  onOpen?: (event: React.SyntheticEvent) => void;
  /** Callback fired when the component requests to be closed (controlled mode). */
  onClose?: (event: React.SyntheticEvent) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-select/
 * @uxpindescription Select components are used for collecting user provided information from a list of options.
 */
export default function Select(props: SelectProps) {
  // multiple demands an array value — coerce scalars so toggling `multiple`
  // in the editor never crashes MUI
  const { multiple, value, ...other } = props;
  const coercedValue = multiple && !Array.isArray(value) ? (value == null || value === '' ? [] : [value]) : value;
  return (
    <MuiSelect<string | string[]> {...other} multiple={multiple} value={coercedValue}>
      {props.children}
    </MuiSelect>
  );
}
