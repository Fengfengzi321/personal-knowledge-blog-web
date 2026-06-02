# 王十二的小站 — Personal Knowledge Platform

个人碎片化知识分享与记录平台。

## Version 1 功能

### ✅ 已完成

- **博客风格首页** — 头像、站点简介、专题链接、Recent Posts 列表
- **文章** — 结构化阐述（`draft → reviewed → published`，构建时自动过滤 draft）
- **专题页** — 知识领域框架页
- **Posts 列表** — AstroPaper 风格，日期排序，日历图标，分页导航（4 条/页）
- **Tags 标签云** — 从文章 frontmatter 自动生成 + 独立标签页面
- **Search 搜索** — 客户端实时搜索（标题、摘要、标签、域）
- **双栏布局** — 左侧 Sidebar + 右侧内容区
- **暗色模式** — 主题切换，localStorage 持久化
- **顶栏导航** — Posts / Learn / Tags / About / 🔍
- **公式渲染** — KaTeX
- **代码高亮** — Shiki
- **公开/私有可见性控制** — `visibility` + `status` 双维度过滤
- **响应式设计** — 移动端 Sidebar 折叠
- **404 页面**

## 技术栈

| 层 | 选型 |
|------|--------|
| 框架 | Astro v6 |
| 内容 | Markdown |
| 公式 | KaTeX（`remark-math` + `rehype-katex`） |
| 代码高亮 | Shiki |
| 搜索 | 客户端实时过滤（预嵌入 JSON 数据） |
| 部署 | 静态文件 |

## 项目结构

```
content/
  articles/     ← 文章（.md）
  topics/       ← 专题页（.md）
public/
  assets/       ← 图片、GIF、视频
  avatar.jpg    ← 首页头像
src/
  components/   Sidebar.astro
  layouts/      BaseLayout.astro
  lib/          content-utils.mjs
  pages/
    index.astro              ← 博客首页
    posts/index.astro        ← Posts 列表（分页）
    posts/[page].astro       ← 分页页
    articles/[slug].astro    ← 文章详情
    topics/[slug].astro      ← 专题详情
    tags/index.astro         ← 标签云
    tags/[tag].astro         ← 单个标签页面
    search.astro             ← 搜索页
    about/index.astro
    learn/index.astro
    404.astro
  styles/         global.css
```
