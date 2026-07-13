import * as React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Link from '../../Link/Link';
import Typography from '../../Typography/Typography';

export default (
  <Breadcrumbs uxpId="breadcrumbs-1">
    <Link uxpId="breadcrumbs-link-1" underline="hover" color="inherit" href="#">
      Files
    </Link>
    <Link uxpId="breadcrumbs-link-2" underline="hover" color="inherit" href="#">
      Documents
    </Link>
    <Typography uxpId="breadcrumbs-typography-1" color="text.primary">
      Analysis
    </Typography>
  </Breadcrumbs>
);
