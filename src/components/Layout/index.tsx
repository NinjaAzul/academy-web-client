import Head from "next/head";

import { Header } from "components/Header";

import { Sider } from "components/Sider";

import { Content } from "components/Content";

import { Footer } from "components/Footer";

import * as Styles from "./styles";

interface LayoutProps {
  children: React.ReactNode;
  layout: {
    content: {
      breadcrumbs: string[];
    };
  };
}

export const Layout = ({ children, layout }: LayoutProps) => {
  return (
    <Styles.Container>
      <Head>
        <title>Gym</title>
      </Head>

      <Sider />

      <Styles.Site>
        <Header>
          <div />
        </Header>

        <Content content={layout.content}>{children}</Content>

        <Footer />
      </Styles.Site>
    </Styles.Container>
  );
};
