import React from "react";
import useAppForm from "../../../../common/form/hooks/useAppForm";
import emailValidator from "../../../../common/form/validators/email-validator";
import requiredValidator from "../../../../common/form/validators/required-validator";
import styles from "./SignIn.module.scss";

const initialValues = {
   email: "",
   password: "",
};

const validate = (formValues) => {
   const errors = {};
   if (requiredValidator(formValues.email)) {
      errors.email = "Este campo es requerido";
   } else if (emailValidator(formValues.email)) {
      errors.email = "Ingrese un formato valido";
   }

   if (requiredValidator(formValues.password)) {
      errors.password = "Este campo es requerido";
   }

   return errors;
};

const SignIn = () => {
   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useAppForm(
      {
         initialValues,
         validate,
         onSubmit: (formValues) => {
            console.log("formValues", formValues);
            console.log("Llamar HTTP");
         },
      }
   );

   return (
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.container}>
         <input
            className={touched.email && errors.email ? styles.error : undefined}
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
         />
         {touched.email && errors.email && <div>{errors.email}</div>}
         <input
            className={touched.password && errors.password ? styles.error : undefined}
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
         />
         {touched.password && errors.password && <div>{errors.password}</div>}
         <button type="submit">Ingresar</button>
      </form>
   );
};

export default SignIn;
