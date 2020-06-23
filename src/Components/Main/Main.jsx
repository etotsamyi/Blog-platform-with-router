import React from "react";
import { BackTop, Skeleton, Divider, Tag, Pagination, Button } from "antd";
import { connect } from "react-redux";
import {
  PlusCircleOutlined,
  HeartTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as routes from "../../routes.js";
import Header from "../Header";
import "antd/dist/antd.css";
import "./main.css";
import * as actions from "../../Actions";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

const mapStateToProps = (state) => {
  const props = {
    getArticleList: actions.getArticleList,
    switchPage: actions.switchPage,
    getArticle: actions.getArticle,
    expandText: actions.expandText,
    articleList: state.articleList,
    currentPage: state.currentPage,
    articlesCount: state.articlesCount,
  };

  return props;
};

const mapDispatchToProps = {
  getArticleList: actions.getArticleList,
  switchPage: actions.switchPage,
  getArticle: actions.getArticle,
  expandText: actions.expandText,
  endEditing: actions.endEditing,
  makeFav: actions.makeFav,
  makeUnfav: actions.makeUnfav,
};

function Main(props) {
  const {
    articleList,
    getArticleList,
    switchPage,
    articlesCount,
    currentPage,
    getArticle,
    expandText,
    endEditing,
    makeFav,
    makeUnfav,
  } = props;

  const renderPagination = () => {
    return (
      <Pagination
        onChange={(page) => {
          switchPage(page);
          window.scrollTo(0, 0);
          getArticleList(page);
        }}
        showSizeChanger={false}
        defaultCurrent="1"
        defaultPageSize="10"
        total={articlesCount}
        hideOnSinglePage
      />
    );
  };

  const renderArticle = (
    heading,
    description,
    body,
    slug,
    author,
    likesCount,
    tagList,
    createdTime,
    expanded,
    favorited
  ) => {
    return (
      <div key={slug} className="main__wall__post">
        <Link
          onClick={() => getArticle(slug)}
          to={`${routes.main}/${slug}`}
          className="main__wall__post__heading"
        >
          <h3>
            {heading}
            <p className="main__wall__post__author">
              Автор: <UserOutlined />
              {author}
            </p>
          </h3>
        </Link>
        <p>{description}</p>
        <p style={expanded ? { display: "block" } : { display: "none" }}>
          {body}
        </p>
        <Button
          onClick={() => {
            expandText(slug);
          }}
        >
          {expanded ? "Свернуть" : "Развернуть"}
        </Button>
        <Divider />
        <div className="main__wall__post__footer">
          <p
            onClick={!favorited ? () => makeFav(slug) : () => makeUnfav(slug)}
            className="likes-count"
          >
            <HeartTwoTone twoToneColor={favorited ? "#ff0000" : "#43338e"} />{" "}
            {likesCount}
          </p>
          <div>
            {tagList.map((tag) => (
              <Tag className="main__wall__post__footer__tag" key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
          <p>
            {formatDistanceToNow(new Date(createdTime), {
              locale: ru,
              addSuffix: true,
            })}
          </p>
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
      getArticleList(currentPage);
    }
  };

  return (
    <div onLoad={loadingArticles()} className="main">
      <Header />
      <div className="main__wall">
        <Link
          onClick={() => endEditing()}
          to={routes.add_article}
          className="main__wall__create"
        >
          <PlusCircleOutlined />
          СОЗДАТЬ
        </Link>
        {Array.isArray(articleList) ? (
          articleList.map((article) => {
            return renderArticle(
              article.title,
              article.description,
              article.body,
              article.slug,
              article.author.username,
              article.favoritesCount,
              article.tagList,
              article.createdAt,
              article.expanded,
              article.favorited
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
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
            {renderLoader()}
          </div>
        )}
      </div>
      {renderPagination()}
      <BackTop />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
