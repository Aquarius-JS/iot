import React from "react";
import { Button, message } from "antd";

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div>
      {contextHolder}
      <Button
        onClick={() => {
          messageApi.info("test");
        }}
      ></Button>
    </div>
  );
}
