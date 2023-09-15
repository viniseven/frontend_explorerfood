import { useState } from 'react';

import AppContext from './AppContext';

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]);

  const value = {
    search,
    setSearch,
    dishes,
    setDishes
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
