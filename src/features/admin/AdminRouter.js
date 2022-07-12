import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/Product/ProductList";

const AdminRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="productos" replace />}></Route>
         <Route path="productos" element={<ProductList />}></Route>
      </Routes>
   );
};

export default AdminRouter;
