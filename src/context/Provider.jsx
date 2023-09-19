import { useState } from 'react';

import AppContext from './AppContext';
import QuantityContext from './QuantityContext';
import CartContext from './CartContext';

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]);

  console.log(search);

  const value = {
    search,
    setSearch,
    dishes,
    setDishes
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddDisheToCart(dishe, quantity) {
    const itemObject = { dishe, quantity };

    setCart([...cart, itemObject]);
  }

  function handleAddRemoveToCart(clickedDishe) {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedDishe
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddDisheToCart,
        handleAddRemoveToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { Provider, CartProvider };
