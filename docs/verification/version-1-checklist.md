# Version 1 Verification Checklist

## Build

- [x] **Static build completes successfully.** — `npm run build` 输出 9 个页面，0 错误。
- [x] **Public build excludes private content.** — `visibility: private` 被 `getPublicContent()` 过滤。
- [x] **Public build excludes draft articles.** — `status: draft` 文章不出现在构建中。
- [x] **Generated routes resolve without missing pages.**
- [x] **404 page generated.** — `/404.html`

## Content

- [x] **Article metadata validates.** — 1 篇文章（LMS 自适应滤波）frontmatter 完整。
- [x] **Topic metadata validates.** — 2 个专题（DSP、卫星通信）frontmatter 完整。
- [x] **Related content links resolve.**
- [x] **Content has `date` field** for Posts sorting.

## Rendering

- [x] **Formulas render correctly.** — KaTeX CSS 已加载。
- [x] **Code blocks render with highlighting.** — Shiki（github-light 主题）。
- [x] **Images / GIFs / videos** fit within the content column.

## Layout

- [x] **Homepage** — 头像 + 简介 + Recent Posts + 专题链接，居中限宽 640px。
- [x] **Article / topic pages** — 左侧 Sidebar + 右侧内容区。
- [x] **Mobile responsive** — Sidebar 折叠，内容区自适应。
- [x] **Dark mode** — 顶栏切换，localStorage 持久化。

## Features

- [x] **Sidebar navigation** — 按 domain 分组，活跃页高亮。
- [x] **Posts listing** — AstroPaper 风格，日期排序，4 条/页分页。
- [x] **Tags page** — 从 `tags` frontmatter 自动生成标签云。
- [x] **Search** — 客户端实时搜索（标题/摘要/标签/域）。
- [x] **Tab navigation** — Posts / Learn / Tags / About / 🔍。
- [x] **Footer** — Built with Astro + GitHub 链接。
