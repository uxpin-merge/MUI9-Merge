import * as React from 'react';
import MuiButton from '@mui/material/Button';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface SplitButtonProps {
  /** The list of options shown in the dropdown. */
  options?: string[];
  /** Index of the initially selected option. */
  selected?: number;
  /** The variant to use. */
  variant?: 'text' | 'outlined' | 'contained';
  /** The color of the button group. */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The size of the components. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** Fired when the main button is clicked. */
  onClick?: React.MouseEventHandler;
  /** Fired when an option is selected; receives the option index. */
  onOptionSelect?: (index: number) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-button-group/#split-button
 * @uxpindescription A ButtonGroup that combines a primary action with a dropdown of alternative actions.
 */
export default function SplitButton({
  options = ['Option 1', 'Option 2', 'Option 3'],
  selected = 0,
  variant = 'contained',
  color = 'primary',
  size,
  disabled,
  onClick,
  onOptionSelect,
  sx,
}: SplitButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(selected);

  React.useEffect(() => {
    setSelectedIndex(selected);
  }, [selected]);

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
    onOptionSelect?.(index);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MuiButtonGroup
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        ref={anchorRef}
        aria-label="split button"
        sx={sx}
      >
        <MuiButton onClick={onClick}>{options[selectedIndex]}</MuiButton>
        <MuiButton
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <ArrowDropDownIcon />
        </MuiButton>
      </MuiButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
