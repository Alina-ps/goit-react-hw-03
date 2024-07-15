import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.input} type="text" name="username" />
          <ErrorMessage name="surname" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field className={s.input} type="tel" name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>

        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
