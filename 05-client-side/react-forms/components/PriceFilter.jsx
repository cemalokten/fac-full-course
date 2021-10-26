import React from 'react';

const PriceFilter = (props) => {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          type="range"
          name="min-price"
          id="min-price"
          min="0.5"
          max="9"
          step="0.25"
          value={props.min}
          onChange={(e) => props.setMin(e.target.value)}
        />
      </label>

      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          name="max-price"
          id="max-price"
          min="0.5"
          max="9"
          step="0.25"
          value={props.max}
          onChange={(e) => props.setMax(e.target.value)}
        />
      </label>
    </fieldset>
  );
};

export { PriceFilter };
