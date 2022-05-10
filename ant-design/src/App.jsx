import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
const { Header } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
    </Layout>
  );
}

export default App;
