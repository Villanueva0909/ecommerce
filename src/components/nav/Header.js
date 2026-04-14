import React, { useState } from "react";
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const items = [
    {
        key: 'Home',
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Home
            </a>
        ),
    },
    // {
    //     label: 'Navigation One',
    //     key: 'mail',
    //     icon: <MailOutlined />,
    // },
    {
        label: 'Register',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    { label: 'Option 1', key: 'setting:1' },
                    { label: 'Option 2', key: 'setting:2' },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
        ],
    },
];

const Header = () => {
    const [state, setState] = useState('')
    const [current, setCurrent] = useState('home');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

}

export default Header