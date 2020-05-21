import React from 'react';
import { Formik, Form } from 'formik';
import { Input } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../Actions';
import 'antd/dist/antd.css';

const mapStateToProps = (state) => {
  const props = {
    loggedIn: state.loggedIn,
  };

  return props;
};

const mapDispatchToProps = {
  signin: actions.login,
};


function Register() {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
          // validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          const fetchData = {
            user: values,
          };
          axios.post('https://conduit.productionready.io/api/users', fetchData).then((response) => console.log(response));
          setSubmitting(false);
        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur, isSubmitting,
        }) => (
          <div className={isSubmitting ? 'submitting-form' : ''}>
            <Form className="registration">
              <label>
                Имя пользователя:
                <Input className={errors.username && touched.username && 'error'} name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
              </label>
              <label>
                Email:
                <Input className={errors.email && touched.email && 'error'} name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
              </label>
              <label>
                Пароль:
                <Input.Password className={errors.password && touched.password && 'error'} name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
              </label>
              <button type="submit">
                Регистрация
              </button>
            </Form>
            <Link to="/login">Войти</Link>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
