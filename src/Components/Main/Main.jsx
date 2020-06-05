import React from "react";
import { BackTop } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as routes from "../../routes.js";
import Header from "../Header";
import "antd/dist/antd.css";
import "./main.css";

function Main(props) {

  const renderArticle = (heading, body) => (
    <div className="main__wall__post">
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  );

  return (
    <div className="main">
      <Header />
      <div className="main__wall">
        <Link to={routes.add_article} className="main__wall__create">
          <PlusCircleOutlined />
          СОЗДАТЬ
        </Link>
        {renderArticle("Сделать пагинацию", "Посты")}
        {renderArticle(
          "Основан на компонентах",
          "Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM."
        )}
        {renderArticle(
          "Основан на компонентах",
          "Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM."
        )}
      </div>
      <BackTop />
    </div>
  );
}

export default Main;
