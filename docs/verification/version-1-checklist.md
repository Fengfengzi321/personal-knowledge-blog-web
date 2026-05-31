# Version 1 Verification Checklist

## Build

- [x] **Static build completes successfully.** — `npm run build` 输出 18 个页面，0 错误。
- [x] **Public build excludes private content.** — `visibility: private` 内容被 `getPublicContent()` 过滤。
- [x] **Public build excludes draft articles.** — `status: draft` 文章不出现在构建中。
- [x] **Generated routes resolve without missing pages.** — 所有页面路径可正常访问。
- [x] **404 page generated.** — `/404.html` 提供友好降级体验。

## Content

- [x] **Card metadata validates.** — 3 张卡片（FFT、链路预算、卫星通信）frontmatter 完整。
- [x] **Article metadata validates.** — 1 篇文章（LMS 自适应滤波）frontmatter 完整。
- [x] **Topic metadata validates.** — 2 个专题（DSP、卫星通信）frontmatter 完整。
- [x] **Related content links resolve.** — `related`、`relatedCards`、`children` 等关联字段通过 `resolveRelatedItems()` 正确解析。
- [x] **Content has date fields.** — 所有内容添加 `date: YYYY-MM-DD` 用于 Posts 排序显示。

## Rendering

- [x] **Formulas render correctly.** — KaTeX CSS 已加载，`$$...$$` 和 `$...$` 公式渲染正常。
- [x] **Code blocks render with highlighting.** — Shiki（github-light 主题）生效。
- [x] **Images fit within the content column.** — `max-width: 100%`，自动缩放。
- [x] **GIFs animate inline.** — SVG 动画示例（beam-coverage-demo.svg）正常显示。
- [x] **Videos display controls and fit within the content column.** — `<video>` 元素受控。

## Layout

- [x] **Homepage is readable on desktop.** — 双栏知识地图布局，domain 网格展示。
- [x] **Homepage is readable on mobile.** — `< 860px` 时 domain 网格单列，侧栏折叠。
- [x] **Article / card / topic pages are readable on desktop.** — 左侧 Sidebar + 右侧内容区，居中限宽。
- [x] **Article / card / topic pages are readable on mobile.** — 侧栏可折叠，内容区自适应。
- [x] **Cards remain compact and scannable.** — 卡片无过度设计，摘要 + 标签清晰。

## Features

- [x] **Dark mode.** — 顶栏切换按钮，localStorage 持久化。
- [x] **Sidebar navigation.** — 按 domain 自动分组，活跃页高亮。
- [x] **Posts listing.** — AstroPaper 风格，日期排序，分页导航，日历图标。
- [x] **Tags page.** — 从 frontmatter `tags` 自动生成标签云 + 独立标签页面。
- [x] **Search.** — 客户端实时搜索（标题/摘要/标签/域），预嵌入数据。
- [x] **Tab navigation.** — 顶栏标签：Posts / Learn / Tags / About / 🔍。
- [x] **Footer with GitHub link.**
