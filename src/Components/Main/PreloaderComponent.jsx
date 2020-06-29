import React from 'react';
import { Skeleton } from 'antd';

const renderLoader = () => (
  <div className="skeleton-loader">
    <Skeleton active size="large" className="main__wall__loading" />
  </div>
);

export default function PreloaderComponent() {
  return (
    <>
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
    </>
  );
}
