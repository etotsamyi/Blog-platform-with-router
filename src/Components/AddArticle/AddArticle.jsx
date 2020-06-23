import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { Input, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";
import * as routes from "../../routes.js";
import * as actions from "../../Actions";
import Header from "../Header";
import "./addArticle.css";

const { TextArea } = Input;

const mapStateToProps = (state) => {
  const props = {
    userName: state.user.username,
    loggedIn: state.loggedIn,
    isEditing: state.isEditing,
    singleArticle: state.singleArticle,
    currentPage: state.currentPage,
  };

  return props;
};

const mapDispatchToProps = {
  createArticle: actions.createArticle,
  getArticleList: actions.getArticleList,
  editArticle: actions.editArticle,
};

function AddArticle(props) {
  const {
    createArticle,
    history,
    getArticleList,
    isEditing,
    singleArticle,
    editArticle,
    currentPage,
  } = props;

  const submitCreating = async (values) => {
    const valuesWithTags = {
      title: values.title,
      description: values.description,
      body: values.body,
      tagList: values.tagList ? values.tagList.split(" ") : [],
    };
    await createArticle(valuesWithTags);
    await getArticleList(1);
    history.push(routes.main);
  };

  const submitEditing = async (values) => {
    const valuesWithTags = {
      title: values.title,
      description: values.description,
      body: values.body,
      tagList: values.tagList ? values.tagList.split(" ") : [""],
    };
    await editArticle(valuesWithTags, singleArticle.slug);
    await getArticleList(currentPage);
    history.push(routes.main);
  };

  return (
    <div className="main">
      <Header />
      <main className="article-form">
        <h2>
          <Link to={routes.main}>
            <LeftCircleOutlined />
          </Link>{" "}
          {!isEditing ? "Создать статью" : "Редактировать статью"}
        </h2>
        <Formik
          initialValues={{
            title: !isEditing ? "" : singleArticle.title,
            description: !isEditing ? "" : singleArticle.description,
            body: !isEditing ? "" : singleArticle.body,
            tagList: !isEditing ? "" : singleArticle.tagList.join(" "),
          }}
          onSubmit={
            !isEditing
              ? (values) => submitCreating(values)
              : (values) => submitEditing(values)
          }
        >
          {({ values, handleChange, handleBlur, isSubmitting }) => (
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
                  <TextArea
                    required
                    className="body"
                    name="body"
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                  />
                </label>
                <label>
                  Теги:
                  <Input
                    className="tagList"
                    name="tagList"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tagList}
                  />
                </label>
                <Button
                  className="submit-button"
                  type="primary"
                  htmlType="submit"
                >
                  {!isEditing ? "Написать" : "Сохранить"}
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </main>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddArticle));
