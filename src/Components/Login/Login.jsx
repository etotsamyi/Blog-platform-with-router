import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../Actions";
import { Input, Button, Divider, message } from "antd";
import * as routes from "../../routes.js";
import "antd/dist/antd.css";
import "./login.css";

const mapStateToProps = (state) => {
  const props = {
    username: state.user.username,
    token: state.user.token,
    signin: actions.loginUser,
    userStatus: state.user,
  };

  return props;
};

const mapDispatchToProps = {
  signin: actions.loginUser,
};

function isError(status, name) {
  if (status === "error") {
    return message.error("Пара логин и пароль не найдена");
  }

  if (
    status !== "requested" &&
    status !== "error" &&
    Object.keys(status).length !== 0
  ) {
    return message.success(`Добро пожаловать ${name}`);
  }
  // return status === "error" ? message.error("Пара логин и пароль не найдена") : null;
}

function Login(props) {
  const { token, signin, userStatus, username } = props;

  if (token) {
    return <Redirect to={routes.main} />;
  }

  isError(userStatus, username);

  const login = (values) => {
    signin(values);
  };

  return (
    <div className="login-form">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          login(values);
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
            <Form className="login-form___login">
              <label>
                Email:
                <Input
                  required
                  className={errors.email && touched.email && "error"}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  htmlType="email"
                />
              </label>
              <label>
                Пароль:
                <Input.Password
                  required
                  className={errors.password && touched.password && "error"}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  htmlType="password"
                />
              </label>
              <Button
                className="submit-button"
                type="primary"
                htmlType="submit"
              >
                Войти
              </Button>
            </Form>
            <Divider />
            <Link className="login-form__register" to={routes.register}>
              Регистрация
            </Link>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
