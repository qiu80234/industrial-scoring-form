# GitHub Pages 网页应用部署 — AI 提示词模板

## 🗣️ 标准提示词（直接复制给 AI 使用）

```
帮我做一个 [描述你的需求]，要求：
1. 做成 HTML 单文件，部署到 GitHub Pages
2. 数据提交保存到 Google Sheets（通过 Google Apps Script API）
3. 手机和电脑都能正常访问
4. 用我系统环境变量里的 GitHub Token 全程自动完成部署，不需要我手动操作
```

---

## 📌 关键词说明

| 关键词 | AI 会做什么 |
|--------|------------|
| `部署到 GitHub Pages` | 自动创建仓库、上传 index.html、开启 Pages 功能 |
| `Google Sheets 保存数据` | 自动生成 Code.gs，你粘贴到 Apps Script 即可 |
| `用 GitHub Token 自动部署` | AI 调用 API 全程操作，无需手动 |
| `手机电脑都能访问` | AI 会用 GitHub Pages 展示页面，不用 Apps Script 展示 |

---

## ⚙️ 技术架构说明（备忘）

```
用户访问链接
    ↓
GitHub Pages（index.html）← 表单页面，手机/电脑通用
    ↓ 提交数据（HTTP POST）
Google Apps Script（Code.gs）← 接收数据的后端 API
    ↓ 写入
Google Sheets ← 数据存储，可直接查看/导出
```

> ⚠️ 注意：表单 HTML 文件必须命名为 `index.html` 才能被 GitHub Pages 正确识别。

---

## 🔗 本项目实际地址（参考）

| 项目 | 地址 |
|------|------|
| 表单访问链接 | https://qiu80234.github.io/industrial-scoring-form/ |
| GitHub 仓库 | https://github.com/qiu80234/industrial-scoring-form |
| Apps Script API | ⚠️ 待部署后填写 |
