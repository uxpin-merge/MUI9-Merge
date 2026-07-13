import * as React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import MuiTextField from '@mui/material/TextField';

export interface AutocompleteProps {
  /** Array of options. */
  options?: string[];
  /** The label of the input rendered inside the Autocomplete. */
  label?: string;
  /** The short hint displayed in the input before the user enters a value. */
  placeholder?: string;
  /**
   * The value of the autocomplete. Provide an array when multiple is true.
   * @uxpinbind onChange 1
   */
  value?: string | string[];
  /** If true, value must be an array and the menu supports multiple selections. */
  multiple?: boolean;
  /** If true, the user input is not bound to the provided options. */
  freeSolo?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the input takes up the full width of its container. */
  fullWidth?: boolean;
  /** The size of the component. */
  size?: 'small' | 'medium';
  /** If true, the input can't be cleared. */
  disableClearable?: boolean;
  /** If true, the component is read-only. */
  readOnly?: boolean;
  /** If true, the input is displayed in an error state. */
  error?: boolean;
  /** The helper text content of the input. */
  helperText?: string;
  /** Callback fired when the value changes. The second argument is the new value. */
  onChange?: (event: React.SyntheticEvent, value: string | string[] | null) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-autocomplete/
 * @uxpindescription The autocomplete is a normal text input enhanced by a panel of suggested options.
 */
export default function Autocomplete(props: AutocompleteProps) {
  const { options = [], label, placeholder, value, multiple, error, helperText, onChange, ...other } = props;

  // Normalize the controlled value so UXPin can switch `multiple` without crashing MUI.
  const safeValue: string | string[] | null = multiple
    ? Array.isArray(value)
      ? value
      : []
    : Array.isArray(value)
      ? (value[0] ?? null)
      : (value ?? null);

  return (
    <MuiAutocomplete<string, boolean, boolean, boolean>
      {...other}
      multiple={multiple}
      options={options}
      value={safeValue}
      onChange={onChange}
      renderInput={(params) => (
        <MuiTextField {...params} label={label} placeholder={placeholder} error={error} helperText={helperText} />
      )}
    />
  );
}
