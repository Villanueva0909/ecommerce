import React, { useState } from "react";
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState('home');
    const onClick = e => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    const logout = () => {
        console.log('the account has been logout');
    }

    return (
        <Menu selectedKeys={[current]} mode="horizontal">
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to='/'>Home</Link>
            </Item>
            <SubMenu icon={<SettingOutlined />} title='Username'>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu icon={<UserOutlined />} onClick={logout}>Logout</Menu>
            </SubMenu>
            <Item key="login" icon={<UserOutlined />} style={{marginLeft:'auto'}}>
                <Link to='/login'>Login</Link>
            </Item>
            <Item key="register" icon={<UserAddOutlined />}>
                <Link to='/register'>Register</Link>
            </Item>
        </Menu>
    )
}

export default Header