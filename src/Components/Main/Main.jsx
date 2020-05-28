import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import * as actions from '../../Actions';
import 'antd/dist/antd.css';

const mapStateToProps = (state) => {
  const props = {
    userName: state.user.username,
    // token: state.user.token,
    loggedIn: state.loggedIn,
    signout: actions.logoutUser,
  };

  return props;
};

const mapDispatchToProps = {
  signout: actions.logoutUser,
};

function Main(props) {
  const token = localStorage.getItem('token');

  if(!token) {
    return (
      <Redirect to="/" />
    )
  }

  const { signout, userName } = props;

  const logout = () => {
    signout();
  }

  return (
    <div>
      <header>
        <p>{userName}</p>
        <Link onClick={() => {
          logout();
        }} to="/">Выйти</Link>
      </header>
      <div>
        <h3>Декларативный</h3>
        <p>
          Создавать интерактивные пользовательские интерфейсы на React — приятно
          и просто. Вам достаточно описать, как части интерфейса приложения
          выглядят в разных состояниях. React будет своевременно их обновлять,
          когда данные изменяются. Декларативные представления сделают код более
          предсказуемым и упростят отладку.
        </p>
        <h3>Основан на компонентах</h3>
        <p>
          Создавайте инкапсулированные компоненты с собственным состоянием, а
          затем объединяйте их в сложные пользовательские интерфейсы. Поскольку
          логика компонента написана на JavaScript, а не содержится в шаблонах,
          можно с лёгкостью передавать самые разные данные по всему приложению и
          держать состояние вне DOM.
        </p>
        <h3>Научитесь однажды — пишите где угодно</h3>
        <p>
          Нам не нужно ничего знать про остальную часть вашего технологического
          стека, поэтому вы можете разрабатывать новую функциональность на
          React, не изменяя существующий код. React также может работать на
          сервере, используя Node.js и на мобильных платформах, используя React
          Native.
        </p>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
