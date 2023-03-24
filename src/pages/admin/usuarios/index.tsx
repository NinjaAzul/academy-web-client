import { Layout } from "components";

import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default function Users() {
  const layout = {
    content: {
      breadcrumbs: ["Admin", "Usuários"],
    },
  };

  return (
    <Layout layout={layout}>
      <Table dataSource={dataSource} columns={columns} loading={true}/>;
    </Layout>
  );
}
