import { Button, ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import Table from "@/components/table";
import dynamic from "next/dynamic";

function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-2">
      <Button type="primary">Button</Button>
      <ConfigProvider
        locale={enUS}
        prefixCls="ssss"
        theme={{
          token: {
            // colorPrimary: '#f00'
            colorPrimary: "#10086",
          },
        }}
      >
        <Table />
      </ConfigProvider>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
