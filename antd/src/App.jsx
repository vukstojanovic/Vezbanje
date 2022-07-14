import "./App.css";
import {
  Form,
  Input,
  Select,
  Col,
  Row,
  DatePicker,
  Checkbox,
  Button,
  Dropdown,
  Space,
  Menu,
} from "antd";
import "antd/dist/antd.css";

function App() {
  function handleFinish(value) {
    console.log(value);
  }

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: "4",
          danger: true,
          label: "a danger item",
        },
      ]}
    />
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>Hover me</Space>
        </a>
      </Dropdown>
      {/* <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col span={12}>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            onFinish={handleFinish}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter your username..." />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email" },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter your email..." />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, max: 20 },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter your password..." />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        "The two passwords you entered do not match"
                      );
                    }
                  },
                }),
              ]}
              dependencies={["password"]}
              hasFeedback
            >
              <Input.Password placeholder="Confirm your password..." />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Select placeholder="Select your gender...">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="dateOfBirth" label="Date of birth">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="website" label="Website">
              <Input placeholder="Enter your website url..." />
            </Form.Item>
            <Form.Item name="agreement" wrapperCol={{ span: 19, offset: 5 }}>
              <Checkbox>
                Agree to our <a>terms and conditons</a>
              </Checkbox>
            </Form.Item>
            <Form.Item name="agreement" wrapperCol={{ span: 19, offset: 5 }}>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row> */}
    </>
  );
}

export default App;
