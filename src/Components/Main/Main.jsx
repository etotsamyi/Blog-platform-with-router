import React from "react";
import { connect } from "react-redux";
import { Button, BackTop } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
import * as actions from "../../Actions";
import * as routes from "../../routes.js";
import "antd/dist/antd.css";
import "./main.css";

const mapStateToProps = (state) => {
  const props = {
    userName: state.user.username,
    loggedIn: state.loggedIn,
    signout: actions.logoutUser,
  };

  return props;
};

const mapDispatchToProps = {
  signout: actions.logoutUser,
};

function Main(props) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to={routes.home} />;
  }

  const { signout, userName } = props;

  return (
    <div className="main">
      <header className="main__header">
        <div>
          Пользователь: <UserOutlined />
          {userName}
        </div>
        <Button
          className="main__header__logout"
          onClick={signout}
          to={routes.home}
        >
          <LogoutOutlined /> Выйти
        </Button>
      </header>
      <div className="main__wall">
        <div className="main__wall__post">
          <h3>Сделать пагинацию</h3>
          <p>Посты</p>
        </div>
        <div className="main__wall__post">
          <h3>получить посты с АПИ</h3>
          <p>Посты</p>
        </div>
        <div className="main__wall__post">
          <h3>Приватные роуты</h3>
          <p>Сделать приватные роуты</p>
        </div>
        <div className="main__wall__post">
          <h3>ПОФИКСИТЬ ОТНОСИТЕЛЬНЫЕ РАЗМЕРЫ!!!!</h3>
          <p>ПОФИКСИТЬ ОТНОСИТЕЛЬНЫЕ РАЗМЕРЫ!!!!</p>
        </div>
        <div className="main__wall__post">
          <h3>Декларативный</h3>
          <p>
            Создавать интерактивные пользовательские интерфейсы на React —
            приятно и просто. Вам достаточно описать, как части интерфейса
            приложения выглядят в разных состояниях. React будет своевременно их
            обновлять, когда данные изменяются. Декларативные представления
            сделают код более предсказуемым и упростят отладку.
          </p>
        </div>
        <div className="main__wall__post">
          <h3>Основан на компонентах</h3>
          <p>
            Создавайте инкапсулированные компоненты с собственным состоянием, а
            затем объединяйте их в сложные пользовательские интерфейсы.
            Поскольку логика компонента написана на JavaScript, а не содержится
            в шаблонах, можно с лёгкостью передавать самые разные данные по
            всему приложению и держать состояние вне DOM.
          </p>
        </div>
        <div className="main__wall__post">
          <h3>Научитесь однажды — пишите где угодно</h3>
          <p>
            Нам не нужно ничего знать про остальную часть вашего
            технологического стека, поэтому вы можете разрабатывать новую
            функциональность на React, не изменяя существующий код. React также
            может работать на сервере, используя Node.js и на мобильных
            платформах, используя React Native.
          </p>
        </div>
      </div>
      <BackTop />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
