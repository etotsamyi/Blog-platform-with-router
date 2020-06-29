import React from 'react';
import { connect } from 'react-redux';
import { Button, Spin } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import * as actions from '../../Actions';
import * as routes from '../../routes.js';
import 'antd/dist/antd.css';
import './header.css';

const mapStateToProps = (state) => {
  const props = {
    user: state.user,
    userName: state.user.username,
    loggedIn: state.loggedIn,
    signout: actions.logoutUser,
  };

  return props;
};

const mapDispatchToProps = {
  signout: actions.logoutUser,
};

function Header(props) {
  const { userName, signout, user } = props;

  return (
    <header className="header">
      <div>
        Пользователь:
        {' '}
        <UserOutlined />
        {user === 'requested' ? <Spin /> : userName}
      </div>
      <Button className="header__logout" onClick={signout} to={routes.home}>
        <LogoutOutlined />
        {' '}
        Выйти
      </Button>
    </header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
