import React from 'react';

const CategorySearch = (props) => {
  return (
    <fieldset>
      <legend>Search</legend>
      <input type="text" name="search" id="search" onChange={(e) => props.setSearch(e.target.value)} />
    </fieldset>
  );
};

export { CategorySearch };
