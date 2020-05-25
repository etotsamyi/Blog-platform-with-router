import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { Link, withRouter, Redirect } from "react-router-dom";
import * as actions from "../../Actions";
import { Input, Button } from "antd";
import "antd/dist/antd.css";

const mapStateToProps = (state) => {
  const props = {
    userName: state.user.userName,
    token: state.user.token,
    signin: actions.loginUser,
  };

  return props;
};

const tokenChecking = () => {
  const token = localStorage.getItem("token")
  console.log(token)
  return token ? "/main" : "/login";
}

const mapDispatchToProps = {
  signin: actions.loginUser,
};

function Login(props) {
  const { token, userName, signin } = props;

  const login = (values) => {
    signin(values);
  };

  if (tokenChecking() === "/login") {
    return (
      <div>
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
              <Form className="login-form">
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
                <button type="submit">Войти</button>
              </Form>
              <Link to="/signup">Регистрация</Link>
            </div>
          )}
        </Formik>
      </div>
    );
  }

  return <Redirect to="/main" />
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
