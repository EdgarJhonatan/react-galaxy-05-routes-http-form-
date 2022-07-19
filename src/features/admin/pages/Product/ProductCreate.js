import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import ProductHttp from "../../http/productHttp";

const ProductCreate = () => {
   const navigate = useNavigate();
   const { getFieldProps, handleSubmit } = useFormik({
      initialValues: {
         name: "",
         price: "",
         active: false,
      },
      onSubmit: (values) => {
         ProductHttp.create(values).then(() => {
            // dominio.com/producto
            navigate("../");
         });
      },
   });

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Nombre" {...getFieldProps("name")} />
         <input type="number" placeholder="Precio" {...getFieldProps("price")} />
         <label htmlFor="">
            <input type="checkbox" {...getFieldProps("active")} />
            Activo
         </label>
         <button type="submit">Guardar</button>
      </form>
   );
};

export default ProductCreate;
