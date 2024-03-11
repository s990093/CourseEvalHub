"use client";
import React, { useState } from "react";

const Evaluate: React.FC = () => {
  // 定义表单中的状态变量
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // 处理表单提交事件
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 阻止表单默认提交行为
    // 在这里执行提交逻辑，比如向服务器发送数据
    console.log("表单提交:", { name, email, message });
    // 提交后重置表单数据
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-100 brouned-lg">
      <h1>填写表单</h1>
      {/* 表单 */}
      <form onSubmit={handleSubmit}>
        {/* 姓名输入框 */}
        <div>
          <label htmlFor="name">姓名：</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // 设置为必填字段
          />
        </div>
        {/* 邮箱输入框 */}
        <div>
          <label htmlFor="email">邮箱：</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // 设置为必填字段
          />
        </div>
        {/* 消息文本框 */}
        <div>
          <label htmlFor="message">消息：</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required // 设置为必填字段
          />
        </div>
        {/* 提交按钮 */}
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default Evaluate;
