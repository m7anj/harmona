import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, MessageOutlined, BarChartOutlined, BookOutlined, SmileOutlined, DollarOutlined } from '@ant-design/icons';
import './nav.scss';

const Nav = () => {
  return (
    <div className="navbar">
      <Menu 
        mode="horizontal"  theme='transparent'
        style={{ 
          background: 'transparent',
          border: 'none',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="chat" icon={<MessageOutlined />}>
          Chat
        </Menu.Item>
        <Menu.Item key="mood" icon={<BarChartOutlined />}>
          Mood Tracker
        </Menu.Item>
        <Menu.Item key="resources" icon={<BookOutlined />}>
          Resources
        </Menu.Item>
        <Menu.Item key="gratitude" icon={<SmileOutlined />}>
          Gratitude Journal
        </Menu.Item>
        <Menu.Item key="spending" icon={<DollarOutlined />}>
          Spending Tracker
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;