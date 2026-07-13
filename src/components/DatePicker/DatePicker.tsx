import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { parseISO } from 'date-fns';

export interface DatePickerProps {
  /** The label of the picker text field. */
  label?: string;
  /** The selected date as an ISO string (e.g. "2026-07-13"). Leave empty for no value. */
  value?: string;
  /** Fired when the value changes. Emits the new date as an ISO string, or null when cleared. */
  onChange?: (value: string | null) => void;
  /** If true, the picker is disabled. */
  disabled?: boolean;
  /** If true, the picker value cannot be changed. */
  readOnly?: boolean;
  /** If true, dates after today are not selectable. */
  disableFuture?: boolean;
  /** If true, dates before today are not selectable. */
  disablePast?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-date-pickers/date-picker/
 * @uxpindescription The Date Picker lets users select a date from a calendar view or type it in a text field. Value is exchanged as an ISO string.
 */
export default function DatePicker(props: DatePickerProps) {
  const { label, value, onChange, disabled, readOnly, disableFuture, disablePast, sx } = props;

  const dateValue = React.useMemo(() => (value ? parseISO(value) : null), [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={dateValue}
        onChange={(newValue: Date | null) => onChange?.(newValue ? newValue.toISOString() : null)}
        disabled={disabled}
        readOnly={readOnly}
        disableFuture={disableFuture}
        disablePast={disablePast}
        sx={sx}
      />
    </LocalizationProvider>
  );
}
