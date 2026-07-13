import * as React from 'react';
import MuiTabs from '@mui/material/Tabs';

export interface TabsProps {
  /** The content of the component, normally Tab elements. */
  children?: React.ReactNode;
  /**
   * The value of the currently selected Tab. Must match the value of one of the Tab children.
   * @uxpinbind onChange 1
   */
  value?: string;
  /** Callback fired when the value changes. */
  onChange?: (event: React.SyntheticEvent, value: string) => void;
  /** Determines additional display behavior of the tabs. */
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  /** The component orientation (layout flow direction). */
  orientation?: 'horizontal' | 'vertical';
  /** If true, the tabs are centered. This prop is intended for large views. */
  centered?: boolean;
  /** Determines the color of the Tab labels. */
  textColor?: 'secondary' | 'primary' | 'inherit';
  /** Determines the color of the indicator. */
  indicatorColor?: 'secondary' | 'primary';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-tabs/
 * @uxpindescription Tabs make it easy to explore and switch between different views.
 */
export default function Tabs(props: TabsProps) {
  return (
    <MuiTabs {...props} value={props.value === undefined ? false : String(props.value)}>
      {props.children}
    </MuiTabs>
  );
}
