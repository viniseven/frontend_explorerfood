import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import AppContext from './AppContext';
import CartContext from './CartContext';

import { api } from '../services/api';

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
  const [orderConfirm, setOrderConfirm] = useState(false);

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
      itemObject.price += itemObject.quantity;
    }

    const newCart = [...cart, itemObject];

    localStorage.setItem('@foodexplorer:cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function handleRemoveToCart(clickedDishe) {
    const filteredCart = cart.filter((cartItem) => cartItem.id != clickedDishe);
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(filteredCart));
    setCart(filteredCart);
  }

  async function handleCreateOrder() {
    setOrderConfirm(true);
    const navigate = useNavigate();
    const orderCart = localStorage.getItem('@foodexplorer:cart');

    await api
      .post('/orders', { orderCart })
      .then(() => {
        alert('Pedido realizado com sucesso');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível realizar pedido');
        }
      });
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('@foodexplorer:cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddDisheToCart,
        handleRemoveToCart,
        orderConfirm,
        setOrderConfirm,
        handleCreateOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { Provider, CartProvider };
