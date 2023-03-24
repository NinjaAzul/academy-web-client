import styled from "styled-components";

import { Layout, Breadcrumb as BreadcrumbANTD } from "antd";

export const Container = styled(Layout.Content)`
  margin: 0 16px;
  padding: 24px;
`;

export const Breadcrumb = styled(BreadcrumbANTD)`
  padding: 1rem 4rem;
`;

export const Content = styled.div`
  padding: 1rem 4rem;
  background: ${({ theme }) => theme.colors.background};
  min-height: 92%;

  overflow: auto;
`;