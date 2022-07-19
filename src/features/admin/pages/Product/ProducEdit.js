import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import ProductHttp from "../../http/productHttp";

const ProductEdit = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [initialValues, setInitialValues] = useState({
      name: "",
      price: "",
      active: false,
   });

   const { values, getFieldProps, handleSubmit } = useFormik({
      initialValues,
      onSubmit: (values) => {
         ProductHttp.update(id, values).then(() => {
            // dominio.com/producto
            navigate("../");
         });
      },
      enableReinitialize: true,
   });

   useEffect(() => {
      ProductHttp.getOne(id).then((res) => {
         setInitialValues(res);
      });
   }, [id]);

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Nombre" {...getFieldProps("name")} />
         <input type="number" placeholder="Precio" {...getFieldProps("price")} />
         <label htmlFor="">
            <input type="checkbox" {...getFieldProps("active")} checked={values.active} />
            Activo
         </label>
         <button type="submit">Guardar</button>
      </form>
   );
};

export default ProductEdit;
