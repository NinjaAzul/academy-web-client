import { useState } from "react";

import * as Styles from "./styles";

import { Menu } from "antd";

import { UserAddOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { push, pathname } = useRouter();

  const items = [
    {
      key: "/admin/usuarios",
      icon: <UserAddOutlined />,
      label: "Usuários",
    },
    {
      key: "/admin/professores",
      icon: <UserAddOutlined />,
      label: "Professores",
    },
  ];

  console.log("collapsed", collapsed);

  return (
    <Styles.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Styles.Header onClick={() => setCollapsed(!collapsed)}>
        <Styles.LogoContainer collapsed={collapsed} />
      </Styles.Header>

      <Menu
        defaultSelectedKeys={[pathname]}
        mode="inline"
        items={items}
        onSelect={(e) => {
          console.log(e);
          push(`${e.key}`);
        }}
      />
    </Styles.Sider>
  );
};
