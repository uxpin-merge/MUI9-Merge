import * as React from 'react';
import MuiCardHeader from '@mui/material/CardHeader';

export interface CardHeaderProps {
  /** The Avatar element to display. */
  avatar?: React.ReactNode;
  /** The action to display in the card header (e.g. an IconButton). */
  action?: React.ReactNode;
  /** The content of the title. */
  title?: React.ReactNode;
  /** The content of the subheader. */
  subheader?: React.ReactNode;
  /** If true, subheader and title won't be wrapped by a Typography component. */
  disableTypography?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/card-header/
 * @uxpindescription The header of a Card with optional avatar, title, subheader and action.
 */
export default function CardHeader(props: CardHeaderProps) {
  return <MuiCardHeader {...props} />;
}
