import React from "react";
import { Formik, Form } from "formik";
import { Input } from "antd";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import "antd/dist/antd.css";

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
  const { registerUser, token } = props;

  if (token) {
    return <Redirect to="/main" />;
  }

  if (props.registerStatus === "register-success") {
    return <Redirect to="/login" />;
  }

  const register = (values) => {
    registerUser(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          register(values);
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
            <Form className="registration">
              <label>
                Имя пользователя:
                <Input
                  className={errors.username && touched.username && "error"}
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
              <button type="submit">Регистрация</button>
            </Form>
            <Link to="/login">Войти</Link>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
