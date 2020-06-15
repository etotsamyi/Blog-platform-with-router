import React from "react";
import { BackTop, Skeleton, Divider, Tag } from "antd";
import { connect } from "react-redux";
import { PlusCircleOutlined, HeartTwoTone, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as routes from "../../routes.js";
import Header from "../Header";
import "antd/dist/antd.css";
import "./main.css";
import * as actions from "../../Actions";

const mapStateToProps = (state) => {
  const props = {
    articleList: state.articleList,
    getArticleList: actions.getArticleList,
  };

  return props;
};

const mapDispatchToProps = {
  getArticleList: actions.getArticleList,
};

function Main(props) {
  const { articleList, getArticleList } = props;

  const renderArticle = (heading, body, slug, author, likesCount, tagList) => {
    return (
      <div key={slug} className="main__wall__post">
        <h3 className="main__wall__post__heading">
          {heading}
          <p className="main__wall__post__author">Автор: <UserOutlined />{author}</p>
        </h3>
        <p>{body}</p>
        <Divider />
        <div className="main__wall__post__footer">
          <p>
            <HeartTwoTone twoToneColor="#ff0000" /> {likesCount}
          </p>
          <div>
            {tagList.map((tag) => (
              <Tag className="main__wall__post__footer__tag" key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderLoader = () => {
    return (
      <div className="skeleton-loader">
        <Skeleton active size="large" className="main__wall__loading" />
      </div>
    );
  };

  const loadingArticles = () => {
    if (articleList.length === 0) {
      getArticleList();
    }
  };

  return (
    <div onLoad={loadingArticles()} className="main">
      <Header />
      <div className="main__wall">
        <Link to={routes.add_article} className="main__wall__create">
          <PlusCircleOutlined />
          СОЗДАТЬ
        </Link>
        {Array.isArray(articleList) ? (
          articleList.map((article) => {
            return renderArticle(
              article.title,
              article.body,
              article.slug,
              article.author.username,
              article.favoritesCount,
              article.tagList
            );
          })
        ) : (
          <div>
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
          </div>
        )}
      </div>
      <BackTop />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
