import React from "react";
import s from "./ContactUs.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const CheckSchema = Yup.object().shape({
    name: Yup.string()
      .trim("Name cannot contain only spaces.")
      .min(2, "Name is too short.")
      .max(25, "Name is too long.")
      .required("Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .trim("Email cannot contain only spaces.")
      .required("Email is required."),
    message: Yup.string()
      .min(10, "Message is too short.")
      .trim("Message cannot contain only spaces.")
      .required("Message is required."),
  });
  return (
    <div className={s.ContactUs}>
      <div className={s.container}>
        <div className={s.textContainer}>
          <p className={s.text}>
            Want to get a discount? Join our fashion community.
          </p>
        </div>
        <div className={s.formContainer}>
          <Formik
            initialValues={{ name: "", email: "", phone: "" }}
            validationSchema={CheckSchema}
            //   onSubmit={(values, options) => {
            //     // Передача даних форми через handleSubmitForm у App
            //     handleSubmitForm(values);
            //     setModalOpen(true);
            //     options.resetForm();
            //   }}
          >
            <Form className={s.form}>
              <label className={s.label} htmlFor="name">
                Name
                <Field
                  type="text"
                  name="name"
                  autoComplete="off"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={s.errorMessage}
                />
              </label>
              <label className={s.label} htmlFor="email">
                Email
                <Field
                  type="email"
                  name="email"
                  autoComplete="off"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.errorMessage}
                />
              </label>
              <label className={s.label} htmlFor="phone number">
                Phone number
                <Field
                  type="phone"
                  name="phone"
                  autoComplete="off"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={s.errorMessage}
                />
              </label>

              <button className={s.btn} type="submit">
                Become a member
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
