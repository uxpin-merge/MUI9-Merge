import * as React from 'react';
import MuiTab from '@mui/material/Tab';

export interface TabProps {
  /** The label element. */
  label?: React.ReactNode;
  /** You can provide your own value. Otherwise, we fallback to the child position index. */
  value?: string;
  /** The icon to display (use MaterialIcon/Icon). */
  icon?: React.ReactNode;
  /** The position of the icon relative to the label. */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** Tab labels appear in a single row. They can use a second line if needed. */
  wrapped?: boolean;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/tab/
 * @uxpindescription A single tab element to be used inside the Tabs component.
 */
export default function Tab(props: TabProps) {
  return (
    <MuiTab
      {...props}
      icon={props.icon as React.ReactElement | string | undefined}
      value={props.value === undefined ? undefined : String(props.value)}
    />
  );
}
