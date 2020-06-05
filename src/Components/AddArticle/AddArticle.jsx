import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { Input, Button, Divider } from "antd";
import * as actions from "../../Actions";
import Header from "../Header";
import "./addArticle.css";

const mapStateToProps = (state) => {
  const props = {
    userName: state.user.username,
    loggedIn: state.loggedIn,
    signout: actions.logoutUser,
  };

  return props;
};

const mapDispatchToProps = {};

function AddArticle(props) {
  return (
    <div className="main">
      <Header />
      <Formik
        initialValues={{
          title: "",
          description: "",
          body: "",
          tagList: [],
        }}
        onSubmit={() => null}
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
                Заголовок:
                <Input
                  required
                  className="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </label>
              <label>
                Описание:
                <Input
                  required
                  className="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </label>
              <label>
                Статья:
                <Input
                  className="tagList"
                  name="tagList"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tagList}
                />
              </label>
              <label>
                Теги:
                <Input
                  required
                  className="body"
                  name="body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                />
              </label>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
