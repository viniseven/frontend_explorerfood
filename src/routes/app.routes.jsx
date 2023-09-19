import { Routes, Route } from 'react-router-dom';

import { CartProvider } from '../context/Provider';

import { Home } from '../pages/Home';
import { AddDishe } from '../pages/AddDishe';
import { Details } from '../pages/Details';
import { EditDishe } from '../pages/EditDishe';

export function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddDishe />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/editdishe/:id" element={<EditDishe />} />
      </Routes>
    </CartProvider>
  );
}
