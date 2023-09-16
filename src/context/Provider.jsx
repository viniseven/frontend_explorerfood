import { useState } from 'react';

import AppContext from './AppContext';
import CartContext from './CartContext';
import QuantityContext from './QuantityContext';

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

function CartOrders({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [idDishe, setIdDishe] = useState('');

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        setOrder,
        idDishe,
        setIdDishe
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function DisheQuantity({ children }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
}

export { Provider, CartOrders, DisheQuantity };
