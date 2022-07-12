import React, { useState, useEffect } from "react";
import ProductHttp from "../../http/productHttp";

const ProductList = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      ProductHttp.getAll().then((res) => setProducts(res));
   }, []);

   return (
      <div>
         <h1> Lista de Productos </h1>
         <table>
            <thead>
               <tr>
                  <td>Nombre</td>
                  <td>Precio</td>
                  <td>Activo</td>
               </tr>
            </thead>
            <tbody>
               {products.map((product) => (
                  <tr key={product.id}>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.active}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ProductList;
