import * as React from 'react';
import Masonry from '../Masonry';
import Card from '../../Card/Card';

export default (
  <Masonry uxpId="masonry-1" columns={3} spacing={2}>
    <Card uxpId="masonry-card-1" sx={{ height: 90 }} />
    <Card uxpId="masonry-card-2" sx={{ height: 40 }} />
    <Card uxpId="masonry-card-3" sx={{ height: 120 }} />
    <Card uxpId="masonry-card-4" sx={{ height: 60 }} />
  </Masonry>
);
