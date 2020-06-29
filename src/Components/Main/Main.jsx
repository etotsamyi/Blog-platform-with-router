import React, { useEffect } from 'react';
import { BackTop, Pagination } from 'antd';
import { connect } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Article from './Article';
import PreloaderComponent from './PreloaderComponent';
import * as routes from '../../routes.js';
import Header from '../Header';
import 'antd/dist/antd.css';
import './main.css';
import * as actions from '../../Actions';

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
  endEditing: actions.endEditing,
};

function Main(props) {
  const {
    articleList,
    getArticleList,
    switchPage,
    articlesCount,
    currentPage,
    endEditing,
  } = props;

  const renderPagination = (
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

  const loadingArticles = () => {
    if (articleList.length === 0) {
      getArticleList(currentPage);
    }
  };

  useEffect(() => {
    loadingArticles();
  }, []);

  return (
    <div className="main">
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
          articleList.map((article) => <Article key={article.slug} article={article} />)
        ) : (
          <div>
            <PreloaderComponent />
          </div>
        )}
      </div>
      {renderPagination}
      <BackTop />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
