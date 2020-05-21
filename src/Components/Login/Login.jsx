import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../Actions";
import { Input } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

const mapStateToProps = (state) => {
  const props = {
    user: state.user,
  };

  return props;
};

const mapDispatchToProps = {
  signin: actions.loginUser,
};

function Login() {
  const login = (values) => {
    actions.loginUser(values);
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
