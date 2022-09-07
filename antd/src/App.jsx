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
  Upload,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useState } from "react";
import { getBase64 } from "./utils/getBase64";
import { beforeUpload } from "./utils/beforeImageUpload";

function App() {
  const [form] = Form.useForm();
  const [hasErrors, setHasErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changedFields, setChangedFields] = useState({});

  function handleFinish(value) {
    console.log(value);
    console.log(changedFields);
    setChangedFields({});
  }

  function handleValuesChange(ch) {
    console.log(ch);
    setChangedFields((prev) => ({ ...prev, ...ch }));
  }

  function handleFormChange() {
    const someErrors = form
      .getFieldsError()
      .some(({ errors }) => errors.length);
    setHasErrors(someErrors);
  }

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, () => {
      setLoading(false);
    });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col span={12}>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            onFinish={handleFinish}
            onFieldsChange={handleFormChange}
            onValuesChange={handleValuesChange}
            form={form}
            initialValues={{
              username: "Vuk",
              password: "user",
            }}
          >
            <Form.Item name="username" label="Username">
              <Input placeholder="Enter your username..." />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ type: "email" }]}
              hasFeedback
            >
              <Input placeholder="Enter your email..." />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ max: 20 }]}
              hasFeedback
            >
              <Input.Password placeholder="Enter your password..." />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                ({ getFieldValue }) => ({
                  required: !!getFieldValue("password"),
                  message: "Please confirm your password",
                }),
                // { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      getFieldValue("password") === value ||
                      !getFieldValue("password")
                    ) {
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
            <Form.Item name="gender" label="Gender">
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
            <Form.Item
              name="agreement"
              wrapperCol={{ span: 19, offset: 5 }}
              valuePropName="checked"
            >
              <Checkbox>
                Agree to our <a>terms and conditons</a>
              </Checkbox>
            </Form.Item>

            <Form.Item
              label="Profile Photo:"
              valuePropName="file"
              name="profilePhoto"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                console.log(e);
                return e && e.file;
              }}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={(true, { showPreviewIcon: false })}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                maxCount={1}
                action="UploadUrl"
                defaultFileList={[
                  {
                    uid: "-1",
                    name: "image",
                    status: "done",
                    url: "https://boi-files.s3.eu-central-1.amazonaws.com/1660386624939.jpg",
                  },
                ]}
              >
                {uploadButton}
              </Upload>
            </Form.Item>

            <Form.Item
              name="agreement"
              wrapperCol={{ span: 19, offset: 5 }}
              shouldUpdate
            >
              <Button
                block
                type="primary"
                htmlType="submit"
                disabled={hasErrors}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default App;
