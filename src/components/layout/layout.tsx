import React from "react";
import { ChildrenComponent } from "../../model";
import MenuComponent from "../menu/MenuComponent";
import styled from "styled-components";
import { Typography } from "antd";

const LayoutWrapper = styled.div`
  max-width: 600px;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  .center-component {
  }
`;

const Layout: React.FC<ChildrenComponent> = ({
  children,
}: ChildrenComponent) => {
  const { Title } = Typography;
  return (
    <LayoutWrapper>
      <div className="center-component">
        <Title style={{ textAlign: "center" }} level={1}>
          #Todo
        </Title>
        <MenuComponent />
        {children}
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
