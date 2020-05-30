import React from "react";
import { Formik, Form } from "formik";
import { Input, Button, Divider } from "antd";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import "antd/dist/antd.css";
import "./register.css";
import * as routes from "../../routes.js";

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
    return <Redirect to={routes.main} />;
  }

  if (props.registerStatus === "register-success") {
    return <Redirect to={routes.login} />;
  }

  const register = (values) => {
    registerUser(values);
  };

  return (
    <div className="register-form">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
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
