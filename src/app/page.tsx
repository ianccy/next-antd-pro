"use client";
import { ProCard, ProForm, BetaSchemaForm } from '@ant-design/pro-components';
import { Button, ConfigProvider, Divider } from 'antd';
// import { ProCard } from '@/components'
export default function Home() {
  return (
    <ConfigProvider
      prefixCls='test'
      theme={{
        token: {
          // colorPrimary: '#f00'
          colorPrimary: '#10086'
        }
      }}>
      <main className="flex flex-col items-center justify-between p-24">
        <Button type='primary'>
          我是按钮
        </Button>
        <Divider>表单</Divider>
        <ProForm>
          <ProCard>
            <Button type='primary'>
              我是按钮
            </Button>
          </ProCard>
        </ProForm>
        <BetaSchemaForm trigger={<Button >
          表单按钮
        </Button>} layoutType="DrawerForm" columns={[]} />
      </main>
    </ConfigProvider>
  )
}
