
import styled from "styled-components";

import { Layout } from "antd";


interface LogoContainerProps {
  collapsed: boolean;
}

export const Sider = styled(Layout.Sider)`


.ant-layout-sider-trigger{
  height: 3rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-right: 1px solid ${({ theme }) => theme.colors.text} !important;

}
`;

export const Header = styled.header`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundLogo};
  position: relative;

  height: 4rem;


  box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.05) ;  
  padding: 1rem 0.5rem;

  margin-bottom: 2rem;

  overflow: hidden;
`;


export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;



  width: 100%;
  height: ${({ collapsed }) => (collapsed ? "100%" : "190%")};
 

  background-image: url("/logo.png");
  background-repeat: no-repeat;
  background-size: ${({ collapsed }) => (collapsed ? "cover" : "contain")};
  background-position: center;
`;
