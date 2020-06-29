import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Input, Button, Divider } from 'antd';
import * as actions from '../../Actions';
import * as routes from '../../routes.js';
import 'antd/dist/antd.css';
import './login.css';

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

function Login(props) {
  const { signin } = props;

  return (
    <div className="login-form">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => signin(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <div className={isSubmitting ? 'submitting-form' : ''}>
            <Form className="login-form___login">
              <label>
                Email:
                <Input
                  required
                  className={errors.email && touched.email && 'error'}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              <label>
                Пароль:
                <Input.Password
                  required
                  className={errors.password && touched.password && 'error'}
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
