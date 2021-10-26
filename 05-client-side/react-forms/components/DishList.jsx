import React from 'react';
import dishes from '../data';

const DishList = (props) => {
  const search = props.search.toLowerCase().trim();
  const dishesArray = dishes.map((dish) => {
    const search = `${dish.name} ${dish.description}`;
    return {
      name: dish.name,
      id: dish.id,
      price: dish.price,
      description: dish.description,
      search: search,
    };
  });
  return (
    <ul className="grid">
      {dishesArray
        .filter((dish) => dish.search.toLowerCase().includes(search))
        .filter((dish) => props.category === 'all' || dish.category === props.category)
        .filter((dish) => dish.price >= props.min && dish.price <= props.max)
        .map((dish) => (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <div>£{dish.price.toFixed(2)}</div>
          </li>
        ))}
    </ul>
  );
};

export { DishList };
