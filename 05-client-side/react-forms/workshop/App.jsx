import React from 'react';
import data from '../data';
import { DishList } from '../components/DishList';
import { PriceFilter } from '../components/PriceFilter';
import { CategoryFilter } from '../components/CategoryFilter';
import { CategorySearch } from '../components/CategorySearch';

function App() {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(9);
  const [category, setCategory] = React.useState('all');
  const [search, setSearch] = React.useState('');
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <PriceFilter min={min} max={max} setMax={setMax} setMin={setMin} />
        </form>
        <form>
          <CategoryFilter category={category} setCategory={setCategory} />
        </form>
        <form>
          <CategorySearch setSearch={setSearch} />
        </form>
      </section>

      <section className="dishes">
        <h2>Dishes</h2>
        <DishList min={min} max={max} category={category} search={search} />
      </section>
    </main>
  );
}

export default App;
