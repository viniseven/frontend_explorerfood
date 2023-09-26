import { Routes, Route } from 'react-router-dom';

import { CartProvider } from '../context/Provider';

import { Home } from '../pages/Home';
import { AddDishe } from '../pages/AddDishe';
import { Details } from '../pages/Details';
import { EditDishe } from '../pages/EditDishe';
import { Orders } from '../pages/Orders';
import { Payment } from '../pages/Payment';

export function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddDishe />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/editdishe/:id" element={<EditDishe />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </CartProvider>
  );
}
