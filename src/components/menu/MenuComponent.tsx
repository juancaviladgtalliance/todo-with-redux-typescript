import React, { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { routes } from "./router";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuContent = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

const MenuComponent = () => {
  const location = useLocation();
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  const onClick: MenuProps["onClick"] = (e) => {
    //console.log("click ", e);
    setCurrent(e.key);
    navigate(`${e.key}`);
  };
  return (
    <MenuContent>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={routes}
      />
    </MenuContent>
  );
};

export default MenuComponent;
