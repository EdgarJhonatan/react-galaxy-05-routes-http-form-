import { Field, Formik, ErrorMessage, Form } from "formik";
import emailValidator from "../../../../common/form/validators/email-validator";
import requiredValidator from "../../../../common/form/validators/required-validator";
import styles from "./SignUp.module.scss";

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

const SignUp = () => {
   return (
      <Formik
         initialValues={initialValues}
         validate={validate}
         onSubmit={(formValues) => {
            console.log("llamada http", formValues);
         }}>
         {() => (
            <Form autoComplete="off" className={styles.container}>
               <Field type="text" placeholder="Email" name="email" />
               <ErrorMessage name="email" />
               <Field type="password" placeholder="Password" name="password" />
               <ErrorMessage name="password" />
               <button type="submit">Ingresar</button>
            </Form>
         )}
      </Formik>
   );
};

export default SignUp;
