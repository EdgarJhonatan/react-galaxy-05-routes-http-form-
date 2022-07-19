import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductHttp from "../../http/productHttp";

const ProductList = () => {
   const [products, setProducts] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      loadProducts();
   }, []);

   const loadProducts = () => {
      ProductHttp.getAll().then((res) => {
         setProducts(res);
      });
   };

   const goCreatePoductPage = () => {
      navigate("nuevo");
   };

   const goEditProductPage = (id) => {
      navigate(`editar/${id}`);
   };

   const confirmDelete = (id) => {
      // eslint-disable-next-line no-restricted-globals
      const yes = confirm("Desea eliminar este producto?");
      if (yes) {
         ProductHttp.remove(id).then(() => {
            setProducts((products) => products.filter((product) => product.id !== id));
         });
      }
   };

   return (
      <div>
         <button onClick={goCreatePoductPage}>Nuevo Producto</button>
         <table>
            <thead>
               <tr>
                  <td>Nombre</td>
                  <td>Precio</td>
                  <td>Activo</td>
                  <td>Editar</td>
                  <td>Eliminar</td>
               </tr>
            </thead>
            <tbody>
               {products.map((product) => (
                  <tr key={product.id}>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.active ? "Si" : "No"}</td>
                     <td>
                        <button onClick={() => goEditProductPage(product.id)}>
                           Editar
                        </button>
                     </td>
                     <td>
                        <button onClick={() => confirmDelete(product.id)}>
                           Eliminar
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ProductList;
