import { Layout } from "antd";

const { Header, Sider, Content, Footer } = Layout;

export default function Index() {
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
  };

  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}
