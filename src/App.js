import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import {
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
  SmileOutlined,
  DeploymentUnitOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const items = [
    getItem(<NavLink to="/home">Главная</NavLink>, "1", <HomeOutlined />),
    getItem(<NavLink to="/profile">Профиль</NavLink>, "2", <SmileOutlined />),
    getItem("Профиль", "sub1", <UserOutlined />, [
      getItem(<NavLink to="/dialogs">Мессенджер</NavLink>, "3"),
      getItem(<NavLink to="/friends">Друзья</NavLink>, "4"),
      getItem(<NavLink to="/notifiactions">Уведомления</NavLink>, "5"),
    ]),
    getItem(<NavLink to="/users">Все пользователи</NavLink>, "6", <TeamOutlined />),
    getItem('Разработчик', "7", <DeploymentUnitOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <HeaderContainer />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ToTalk ©2023 Created by diasqazaqbro
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
