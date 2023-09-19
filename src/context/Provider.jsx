import { useState } from 'react';

import AppContext from './AppContext';
import QuantityContext from './QuantityContext';
import CartContext from './CartContext';

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

function DisheQuantity({ children }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
}

function CartProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export { Provider, DisheQuantity, CartProvider };
