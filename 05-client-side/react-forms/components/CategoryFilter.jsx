import React from 'react';

const categories = ['all', 'burger', 'hot dog', 'sandwich', 'fries', 'topping', 'drink', 'extra'];

function CategoryFilter({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name="categories"
            id={cat}
            value={cat}
            checked={cat === category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}
export { CategoryFilter };
