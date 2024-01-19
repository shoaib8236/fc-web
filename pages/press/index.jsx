import React, { useState } from "react";
import { Row, Form, Input, Button, Space, notification } from "antd";
import { LoadingOutlined, SafetyCertificateFilled } from "@ant-design/icons";
import PageLayout from "../../uiComponents/PageLayout/PageLayout";
import staric from "../../assets/images/icons/staric.png";
import SneakBar from "../../uiComponents/SneakBar/SneakBar";
import Paragraph from "./../../uiComponents/paragraph/Paragraph";
import { BsEmojiSmile } from "react-icons/bs";

const layout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

const validateMessages = {
  required: "This field is required!",
  types: {
    email: "Please enter a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const index = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [name, setName] = useState();
  const [blog, setBlog] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [sneakBar, setSneakBar] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    let payload = JSON.stringify(values);

    let response = await fetch(
      `https://api.foodchoo.com/api/v1/common/press-queries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      }
    );
    response = await response.json();

    if (response.status) {
      setLoading(false);
      form.resetFields();
      // notification.info({
      //   message: "Thanks!",
      //   description:
      //     "Your enquiry has been successfully registered with the FoodChoo Marketing Team! We'll get back to you at the earliest possible time.",
      // });
      setSneakBar(true);
    } else {
      setLoading(false);
      notification.error({
        message: "Oops!",
        description:
          "There was an error processing your query. Please try again later.",
      });
    }
  };

  return (
    <>
      <PageLayout title={"Press"}>
        <div className="layout i-am-press">
          <h2 className="header">
            For all Press enquiries, please use this form ONLY
            <p>(We're getting smashed at the moment, is all!)</p>
          </h2>
          <Row gutter={24}>
            <Form
              {...layout}
              form={form}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="formFields">
                <img src={staric.src} alt="" />
                <Form.Item name={"name"} rules={[{ required: true }]}>
                  <Input
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="formFields">
                <img src={staric.src} alt="" />
                <Form.Item name={"blog_reference"} rules={[{ required: true }]}>
                  <Input
                    placeholder="Representing which Publication / Blog?"
                    onChange={(e) => setBlog(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="formFields">
                <img style={{ opacity: 0 }} src={staric.src} alt="" />
                <Form.Item
                  name={"email"}
                  rules={[{ type: "email" }, { required: true }]}
                >
                  <Input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="formFields">
                <img src={staric.src} alt="" />
                <Space>
                  <Form.Item name={"phone"}>
                    <Input type={"tel"} placeholder="Phone" />
                  </Form.Item>
                  <Form.Item name={"ext"}>
                    <Input placeholder="Ext" />
                  </Form.Item>
                </Space>
              </div>
              <div className="formFields">
                <img src={staric.src} alt="" />
                <Form.Item name={"message"}>
                  <Input.TextArea
                    placeholder="Your message here"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Item>
              </div>
              <Form.Item
                wrapperCol={{
                  xs: {
                    span: 24,
                    offset: 0,
                  },
                  sm: {
                    span: 24,
                    offset: 2,
                  },
                }}
              >
                <Button
                  style={{
                    background: message ? "" : "#a2a0a0",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                  type="primary"
                  htmlType="submit"
                  className={"form-sub"}
                  disabled={loading}
                >
                  {loading ? <LoadingOutlined color="white" /> : "Send Enquiry"}
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
      </PageLayout>
      <SneakBar
        className={"sneakbar_press_wrapper"}
        showSneakBar={sneakBar}
        handleSneakBar={setSneakBar}
      >
        <BsEmojiSmile className="bs_smile_ico" />
        <h1>Received!</h1>
        <h1>We'll be in touch shortly!</h1>
      </SneakBar>
    </>
  );
};

export default index;
