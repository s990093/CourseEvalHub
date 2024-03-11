"use client";

import React, { useState } from "react";

const Wish: React.FC = () => {
  // 定义表单中的状态变量
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");

  // 处理表单提交事件
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 阻止表单默认提交行为
    // 在这里执行提交逻辑，比如向服务器发送数据
    console.log("许愿:", { name, wish });
    // 提交后重置表单数据
    setName("");
    setWish("");
  };

  return (
    <div>
      <h1>许愿表单</h1>
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
        {/* 许愿内容输入框 */}
        <div>
          <label htmlFor="wish">许愿：</label>
          <textarea
            id="wish"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            required // 设置为必填字段
          />
        </div>
        {/* 提交按钮 */}
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default Wish;
