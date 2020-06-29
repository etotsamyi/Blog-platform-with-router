import React from 'react';
import { Divider, Tag, Button } from 'antd';
import {
  HeartTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { connect } from 'react-redux';
import * as actions from '../../Actions';
import * as routes from '../../routes.js';

const mapStateToProps = (state) => {
  const props = {
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
  pushLike: actions.pushLike,
  pushUnlike: actions.pushUnlike,
};

function Article(props) {
  const {
    heading,
    description,
    body,
    slug,
    author,
    favoritesCount,
    tagList,
    createdAt,
    expanded,
    favorited,
  } = props.article;

  const {
    getArticle,
    expandText,
    pushLike,
    pushUnlike,
  } = props;

  const { username } = author;

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
            Автор:
            {' '}
            <UserOutlined />
            {username}
          </p>
        </h3>
      </Link>
      <p>{description}</p>
      <p style={expanded ? { display: 'block' } : { display: 'none' }}>
        {body}
      </p>
      <Button
        onClick={() => {
          expandText(slug);
        }}
      >
        {expanded ? 'Свернуть' : 'Развернуть'}
      </Button>
      <Divider />
      <div className="main__wall__post__footer">
        <p
          onClick={!favorited ? () => pushLike(slug) : () => pushUnlike(slug)}
          className="likes-count"
        >
          <HeartTwoTone twoToneColor={favorited ? '#ff0000' : '#43338e'} />
          {' '}
          {favoritesCount}
        </p>
        <div>
          {tagList.map((tag) => (
            <Tag className="main__wall__post__footer__tag" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
        <p>
          {formatDistanceToNow(new Date(createdAt), {
            locale: ru,
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
