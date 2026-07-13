import * as React from 'react';
import MuiRating from '@mui/material/Rating';

export interface RatingProps {
  /**
   * The rating value.
   * @uxpinbind onChange 1
   */
  value?: number | null;
  /** The default value. Use when the component is not controlled. */
  defaultValue?: number;
  /** Maximum rating. */
  max?: number;
  /** The minimum increment value change allowed, e.g. 0.5 for half stars. */
  precision?: number;
  /** Removes all hover effects and pointer events. */
  readOnly?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** The size of the component. */
  size?: 'small' | 'medium' | 'large';
  /** If true, only the selected icon is highlighted. */
  highlightSelectedOnly?: boolean;
  /** The name attribute of the radio input elements. Should be unique within the page. */
  name?: string;
  /** Callback fired when the value changes. The second argument is the new value. */
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-rating/
 * @uxpindescription Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
 */
export default function Rating(props: RatingProps) {
  return <MuiRating {...props} />;
}
