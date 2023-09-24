import { useState } from 'react';

import AppContext from './AppContext';
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

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddDisheToCart(id, name, image, price, quantity) {
    const itemObject = { id, name, image, price, quantity };

    const verifyDisheCart = cart.find((itemObject) => itemObject.id == id);

    if (verifyDisheCart) {
      alert(
        'Este produto já está no seu carrinho, para alterar quantidade, remova-o do carrinho e insira-o novamente com a quantidade desejada'
      );
      return;
    }

    if (itemObject.quantity > 1) {
      itemObject.price += itemObject.price;
    }

    setCart([...cart, itemObject]);
  }

  function handleRemoveToCart(clickedDishe) {
    const filteredCart = cart.filter((cartItem) => cartItem.id != clickedDishe);
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddDisheToCart,
        handleRemoveToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { Provider, CartProvider };
