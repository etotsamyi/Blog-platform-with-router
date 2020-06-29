import React from 'react';
import './singleArticle.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Skeleton, Divider, Tag } from 'antd';
import {
  HeartTwoTone,
  UserOutlined,
  LeftCircleOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import Header from '../Header';
import * as actions from '../../Actions';
import * as routes from '../../routes.js';

const mapStateToProps = (state) => {
  const props = {
    singleArticle: state.singleArticle,
    user: state.user,
  };

  return props;
};

const mapDispatchToProps = {
  getArticle: actions.getArticle,
  startEditing: actions.startEditing,
  clearSingleArticle: actions.clearSingleArticle,
  pushLike: actions.pushLike,
  pushUnlike: actions.pushUnlike,
  // getArticleList: actions.getArticleList,
  // switchPage: actions.switchPage,
  // dispatchSlug: actions.dispatchSlug,
};

function SingleArticle(props) {
  const {
    getArticle,
    singleArticle,
    match,
    startEditing,
    clearSingleArticle,
    user,
    pushLike,
    pushUnlike,
  } = props;

  const loadingArticle = () => {
    if (singleArticle === '') {
      getArticle(match.params.slug);
    }
  };

  const renderLoader = () => (
    <div className="single-article__skeleton-loader">
      <Skeleton active size="large" className="main__wall__loading" />
    </div>
  );

  const renderArticle = (
    heading,
    body,
    author,
    likesCount,
    tagList,
    createdTime,
    slug,
    favorited,
  ) => (
    <div className="article">
      <Link
        onClick={() => clearSingleArticle()}
        to={routes.main}
        className="article__back-button"
      >
        <LeftCircleOutlined />
      </Link>
      <div className="article__header">
        <div className="article__header__edit-button">
          {author === user.username ? (
            <Link
              onClick={() => startEditing(true)}
              to={`${routes.main}/${slug}/edit`}
            >
              <EditOutlined />
            </Link>
          ) : null}
        </div>
        <h3 className="article__header__heading">{heading}</h3>

        <span className="">
          Автор:
          {' '}
          <UserOutlined />
          {author}
        </span>
        <span>
          {formatDistanceToNow(new Date(createdTime), {
            locale: ru,
            addSuffix: true,
          })}
        </span>
      </div>
      <p>{body}</p>
      <Divider />
      <div className="">
        <p
          onClick={!favorited ? () => pushLike(slug) : () => pushUnlike(slug)}
          className="likes-count"
        >
          <HeartTwoTone twoToneColor={favorited ? '#ff0000' : '#43338e'} />
          {' '}
          {likesCount}
        </p>
        <div>
          {tagList.map((tag) => (
            <Tag className="" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div onLoad={loadingArticle()} className="single-article-page">
      <Header />
      {typeof singleArticle === 'object'
        ? renderArticle(
          singleArticle.title,
          singleArticle.body,
          singleArticle.author.username,
          singleArticle.favoritesCount,
          singleArticle.tagList,
          singleArticle.createdAt,
          singleArticle.slug,
          singleArticle.favorited,
        )
        : renderLoader()}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
