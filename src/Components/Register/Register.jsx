import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Divider } from "antd";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import "antd/dist/antd.css";
import "./register.css";
import * as routes from "../../routes.js";
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  username: yup.string().max(50, 'Слишком длинное имя').required('Поле обязательно для заполнения'),
  email: yup.string().email('Неверный email').required('Поле обязательно для заполнения'),
  password: yup
    .string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .max(40, 'Пароль должен содержать не более 40 символов')
    .required('Поле обязательно для заполнения'),
});

const mapStateToProps = (state) => {
  const props = {
    registerUser: actions.registerUser,
    registerStatus: state.registerStatus,
    token: state.user.token,
  };

  return props;
};

const mapDispatchToProps = {
  registerUser: actions.registerUser,
};

function Register(props) {
  const { registerUser } = props;

  if (props.registerStatus === "register-success") {
    return <Redirect to={routes.login} />;
  }

  return (
    <div className="register-form">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          registerUser(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <div className={isSubmitting ? "submitting-form" : ""}>
            <Form className="register-form___registration">
              <label>
                Имя пользователя:
                <Input
                  className={errors.username && touched.username && "error"}
                  required
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
              </label>
              <label>
                Email:
                <Input
                  className={errors.email && touched.email && "error"}
                  required
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              {errors.email && touched.email && (
                  <div className="input-error">{errors.email}</div>
                )}
              <label>
                Пароль:
                <Input.Password
                  className={errors.password && touched.password && "error"}
                  required
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div className="input-error">{errors.password}</div>
                )}
              </label>
              <Button
                className="submit-button"
                type="primary"
                htmlType="submit"
              >
                Регистрация
              </Button>
            </Form>
            <Divider />
            <Link className="register-form__signin" as={Button} to={routes.login}>
              Войти
            </Link>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
