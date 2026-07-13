import * as React from 'react';
import Autocomplete from '../Autocomplete';

const top10Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  "Schindler's List",
  'Pulp Fiction',
  'The Lord of the Rings: The Return of the King',
  'The Good, the Bad and the Ugly',
  'Fight Club',
];

export default (
  <Autocomplete uxpId="autocomplete-1" options={top10Films} label="Movie" sx={{ width: 300 }} />
);
