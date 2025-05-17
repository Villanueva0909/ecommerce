import React, { useState } from 'react';
import { MailOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../nav/Header';

export const Header = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    setCurrent(e.key)
  }

  const { SubMenu } = Menu;

  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="/" icon={<MailOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="/register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Menu.Item>

        <Menu.Item
          key="/login"
          icon={<UserOutlined />}

        >
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}


export default Header