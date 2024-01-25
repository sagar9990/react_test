import React from "react";
import logo from "../../../assets/images/images-logo.png";
import {  Image, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./Header.css";

const items = [
  {
    key: 1,
    label: <Link to="/" >Home</Link>,
  },
  {
    key: 2,
    label: <Link to="/add" >Add</Link>,
  },
];
const Header = () => {
  return (
    <Layout.Header className="layout-header">
      <div className="demo-logo">
        <Image width={40} src={logo} className="logo-image" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        className="menu-style"
        selectedKeys={null}
      />
    </Layout.Header>
  );
};

export default Header;
