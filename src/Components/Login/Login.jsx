import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../Actions";
import { Input, Button, Divider } from "antd";
import * as routes from "../../routes.js"
import "antd/dist/antd.css";
import "./login.css";

const mapStateToProps = (state) => {
  const props = {
    username: state.user.username,
    token: state.user.token,
    signin: actions.loginUser,
  };

  return props;
};

const mapDispatchToProps = {
  signin: actions.loginUser,
};

function Login(props) {
  const { token, signin } = props;

  if (token) {
    return <Redirect to={routes.main} />;
  }

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
            <Form>
              <label>
                Email:
                <Input
                  className={errors.email && touched.email && "error"}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              <label>
                Пароль:
                <Input.Password
                  className={errors.password && touched.password && "error"}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
