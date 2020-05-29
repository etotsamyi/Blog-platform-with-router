import React from "react";
import { connect } from "react-redux";
import { Button, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons"
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../Actions";
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
    return <Redirect to="/" />;
  }

  const { signout, userName } = props;

  const logout = () => {
    signout();
  };

  return (
    <div className="main">
      <header className="main__header">
        <div>
          Пользователь: <UserOutlined />
          {userName}
        </div>
        <Link
          onClick={() => {
            logout();
          }}
          to="/"
        >
          Выйти
        </Link>
      </header>
      <div className="main__wall">
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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
