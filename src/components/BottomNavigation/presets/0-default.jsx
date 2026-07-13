import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';
import Icon from '../../Icon/Icon';

export default (
  <BottomNavigation uxpId="bottom-navigation-1" showLabels>
    <BottomNavigationAction
      uxpId="bottom-navigation-action-1"
      label="Home"
      value="home"
      icon={<Icon uxpId="bottom-navigation-icon-1">home</Icon>}
    />
    <BottomNavigationAction
      uxpId="bottom-navigation-action-2"
      label="Recents"
      value="recents"
      icon={<Icon uxpId="bottom-navigation-icon-2">restore</Icon>}
    />
    <BottomNavigationAction
      uxpId="bottom-navigation-action-3"
      label="User"
      value="user"
      icon={<Icon uxpId="bottom-navigation-icon-3">person</Icon>}
    />
  </BottomNavigation>
);
