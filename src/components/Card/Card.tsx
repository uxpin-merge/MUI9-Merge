import * as React from 'react';
import MuiCard from '@mui/material/Card';

export interface CardProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** If true, the card will use raised styling. */
  raised?: boolean;
  /** Shadow depth. It accepts values between 0 and 24 inclusive. */
  elevation?: number;
  /** The variant to use. */
  variant?: 'elevation' | 'outlined';
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-card/
 * @uxpindescription Cards contain content and actions about a single subject.
 */
export default function Card(props: CardProps) {
  return <MuiCard {...props}>{props.children}</MuiCard>;
}
