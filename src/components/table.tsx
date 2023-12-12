import { PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import { useRef } from "react";

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: "index",
    dataIndex: "index",
    valueType: "indexBorder",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Money",
    dataIndex: "title",
    width: 100,
    order: 1,
    valueType: "money",
    renderText: () => (Math.random() * 100).toFixed(2),
  },
];

export default function Table() {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      request={async () => {
        return {
          data: [
            {
              key: 1,
              name: `TradeCode ${1}`,
              createdAt: 1602572994055,
            },
          ],
          success: true,
        };
      }}
      rowKey="key"
      rowSelection={{}}
      search={{
        labelWidth: "auto",
      }}
      dateFormatter="string"
      headerTitle={
        <Space>
          <span>Basic Table</span>
        </Space>
      }
      toolBarRender={() => [
        <Button key="3" type="primary">
          <PlusOutlined />
          New
        </Button>,
      ]}
    />
  );
}
