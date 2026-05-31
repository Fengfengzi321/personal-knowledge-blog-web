# 王十二的小站 — Personal Knowledge Platform

个人知识沉淀与成长记录平台。

初版聚焦于捕获碎片化技术知识，逐步组织成个人知识体系，并有选择地将成熟内容公开发布共享。不追求商业化、流量增长或社交功能。

## Version 1 范围

### 已完成功能

- ✅ 知识地图首页 — domain 分组展示，统计数据面板
- ✅ Markdown/MDX 内容维护
- ✅ 知识卡片 — 碎片化概念、公式、观察的最小单元（`seed → growing → distilled`）
- ✅ 结构化文章 — 成熟阐述（`draft → reviewed → published`，构建时自动过滤 draft）
- ✅ 专题页 — 稳定知识框架
- ✅ 轻量关联关系 — `related`、`parent`、`derivedFrom`、`relatedCards` 字段
- ✅ 公式渲染 — KaTeX
- ✅ 代码高亮 — Shiki
- ✅ 图片/GIF/视频嵌入
- ✅ 公开/私有可见性控制 + 构建时过滤
- ✅ **双栏布局** — 左侧 Sidebar + 右侧内容区
- ✅ **暗色模式** — 主题切换，localStorage 持久化
- ✅ **Posts 列表页** — AstroPaper 风格，日期排序，日历图标，分页导航
- ✅ **Tags 标签页** — 从内容 frontmatter 自动生成标签云 + 独立标签页面
- ✅ **Search 搜索页** — 客户端实时搜索（标题、摘要、标签、域）
- ✅ **404 页面**
- ✅ **响应式设计** — 移动端 Sidebar 折叠

### 非目标

- ❌ 用户登录
- ❌ 后端数据库
- ❌ Web 端管理编辑器
- ❌ 评论系统
- ❌ 完整知识图谱编辑器
- ❌ 复杂交互模拟
- ❌ 推荐引擎
- ❌ 流量分析

## 内容领域

- 数字信号处理算法与原理
- 卫星通信仿真与实验记录
- 星载资源调度算法
- 波束覆盖区域算法
- 仿真图像、GIF、短视频及可视化

## 技术栈

| 层 | 选型 |
|------|--------|
| 框架 | Astro v6 |
| 内容 | Markdown / MDX |
| 公式 | KaTeX（`remark-math` + `rehype-katex`） |
| 代码高亮 | Shiki |
| 搜索 | 客户端实时过滤（预嵌入 JSON 数据） |
| 部署 | 静态文件 |

## 项目结构

```
content/
  cards/        ← 知识卡片（.md）
  articles/     ← 文章/笔记（.md）
  topics/       ← 专题页（.md）
public/
  assets/       ← 图片、GIF、视频
src/
  components/
    Sidebar.astro
  layouts/
    BaseLayout.astro
  lib/
    content-utils.mjs
  pages/
    index.astro         ← 知识地图首页
    posts/index.astro   ← Posts 列表（分页）
    posts/[page].astro  ← 分页页
    cards/[slug].astro
    articles/[slug].astro
    topics/[slug].astro
    tags/index.astro    ← 标签云
    tags/[tag].astro    ← 单个标签页面
    search.astro        ← 搜索页
    about/index.astro
    learn/index.astro
    404.astro
  styles/
    global.css
docs/
  scope/
  architecture/
  content/
  superpowers/
  verification/
```

## 当前状态

**Version 1 初版已完成。** 静态站点可正常构建与预览，核心功能（知识地图、卡片/文章/专题、侧栏导航、暗色模式、Posts 列表、Tags 标签云、Search、公式渲染、代码高亮、公开/私有过滤）全部就绪。
