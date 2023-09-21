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

    const verifyDisheCart = cart.find(
      (itemObject) => itemObject.dishe.id == dishe.id
    );

    if (verifyDisheCart) {
      verifyDisheCart.quantity = quantity;
      alert(
        'Este produto já foi selecionado, alteramos para a quantidade informada'
      );
      setCart([...cart]);
      return;
    }

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
