import { useState, useEffect, useCallback } from "react";

export default function useAppForm({ initialValues, validate, onSubmit }) {
   const [values, setValues] = useState(initialValues);
   const [errors, setErrors] = useState({});
   const [touched, setTouched] = useState({});

   useEffect(() => {
      const errors = validate(values);
      setErrors(errors);
   }, [values, validate]);

   const handleChange = useCallback((e) => {
      setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
   }, []);

   const handleBlur = useCallback((e) => {
      setTouched((values) => ({ ...values, [e.target.name]: true }));
   }, []);

   const markAllAsTouched = useCallback(() => {
      Object.keys(values).forEach((key) => {
         setTouched((touched) => ({ ...touched, [key]: true }));
      });
   }, [values]);

   const handleSubmit = useCallback(
      (e) => {
         e.preventDefault();
         markAllAsTouched();
         if (!Object.keys(errors).length) {
            onSubmit(values);
         }
      },
      [errors, markAllAsTouched, onSubmit, values]
   );

   return {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
   };
}
