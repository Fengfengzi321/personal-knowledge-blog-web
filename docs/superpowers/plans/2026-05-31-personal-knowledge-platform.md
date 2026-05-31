# Personal Knowledge Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight Markdown/MDX-first personal knowledge platform centered on a knowledge map, knowledge cards, structured articles, topics, and reliable media display.

**Architecture:** The first version should be a static or mostly static knowledge site. Content lives in files, metadata lives in frontmatter, and public/private publishing is handled at build time rather than by a backend service.

**Tech Stack:** Markdown/MDX content, a static-site framework to be selected in Task 2, formula rendering with KaTeX or MathJax, code highlighting with Shiki or Prism, native image/GIF/video media handling, and Git for version control.

---

## File Structure

- `.gitignore`: Keeps generated folders, dependencies, builds, and brainstorming companion files out of Git.
- `README.md`: Public project overview, positioning, scope, and first-version boundaries.
- `docs/scope/version-1-scope.md`: Formal version 1 scope statement, out-of-scope list, and ready-condition checklist.
- `docs/superpowers/specs/2026-05-31-personal-knowledge-platform-design.md`: Approved design specification.
- `docs/superpowers/plans/2026-05-31-personal-knowledge-platform.md`: This implementation plan.
- `docs/architecture/tech-stack-decision.md`: Framework and library decision record created in Task 2.
- `docs/content/content-structure.md`: Content directory and naming convention created in Task 3.
- `docs/content/frontmatter-schemas.md`: Card, article, and topic metadata schemas created in Task 4.
- `content/cards/`: Knowledge card Markdown/MDX files created in Task 9.
- `content/articles/`: Structured note/article Markdown/MDX files created in Task 9.
- `content/topics/`: Knowledge framework topic Markdown/MDX files created in Task 9.
- `public/assets/`: Images, GIFs, videos, and other public assets created or added in Task 9.

---

## Task 1: Confirm Version 1 Scope And Git Baseline

- [x] **Step 1: Create the project README**
- [x] **Step 2: Create the formal scope document**
- [x] **Step 3: Ensure generated files stay out of Git**
- [x] **Step 4: Verify no unfinished placeholders**
- [x] **Step 5: Review Git status**
- [x] **Step 6: Commit the planning baseline**

## Task 2: Choose Technology Stack

- [x] **Step 1: Create the technology decision record**
- [x] **Step 2: Verify the decision has no placeholders**
- [x] **Step 3: Commit the technology decision**

## Task 3: Define Content Directory Structure

- [x] **Step 1: Create content structure documentation**
- [x] **Step 2: Create empty content directories**
- [x] **Step 3: Add `.gitkeep` files for empty directories**
- [x] **Step 4: Commit content structure**

## Task 4: Define Frontmatter Schemas

- [x] **Step 1: Create schema documentation**
- [x] **Step 2: Verify schema docs have no placeholders**
- [x] **Step 3: Commit schema documentation**

## Task 5: Design Knowledge Map Behavior

- [x] **Step 1: Document behavior**
- [x] **Step 2: Commit behavior documentation**

## Task 6: Design Reading Experience

- [x] **Step 1: Document reading layouts**
- [x] **Step 2: Commit reading documentation**

## Task 7: Define Search And Discovery

- [x] **Step 1: Document search behavior**
- [x] **Step 2: Commit search documentation**

> **Note:** V1 search implemented as a dedicated `/search/` page with client-side real-time filtering (title, summary, tags, domain), not a generated static index as originally described.

## Task 8: Define Public And Private Publishing Rules

- [x] **Step 1: Document publishing rules**
- [x] **Step 2: Commit publishing rules**

## Task 9: Prepare Seed Content

- [x] **Step 1: Create representative content**
  - Cards: `fft-frequency-resolution`, `satellite-link-budget`, `satellite-communication`
  - Articles: `lms-adaptive-filtering-principle` (draft, filtered from public build)
  - Topics: `digital-signal-processing`, `satellite-communication`
- [x] **Step 2: Include dynamic media** — `beam-coverage-demo.svg` (animated SVG)
- [x] **Step 3: Commit seed content**

## Task 10: Define Verification Checklist

- [x] **Step 1: Create checklist**
- [x] **Step 2: Commit checklist**

## Task 11: Implement Static Knowledge Platform Scaffold

- [x] **Step 1: Write a failing test for knowledge grouping**
- [x] **Step 2: Implement the minimal content utilities**
- [x] **Step 3: Add Astro project files**
- [x] **Step 4: Add content, pages, and styles**
- [x] **Step 5: Verify** — `npm test` + `npm run build` pass
- [x] **Step 6: Commit**

## Beyond Original Plan — 初版迭代功能

以下功能在原计划之外，在开发过程中逐步添加：

### V1 Layout Redesign (Starlight 风格)
- [x] **双栏布局** — 左侧 Sidebar（270px）+ 右侧内容区
- [x] **暗色模式** — CSS 变量 + JavaScript 切换 + localStorage 持久化
- [x] **Sidebar 组件** — 自动按 domain 分组，活跃页高亮
- [x] **顶栏标签导航** — Posts / Learn / Tags / About / 🔍 搜索
- [x] **页脚** — Built with Astro + GitHub 链接

### V1 Posts Page
- [x] **Posts 列表页** — `/posts/` AstroPaper 风格
- [x] **日期格式** — "25 May, 2026"，手动解析避免时区问题
- [x] **日历图标** — 日期前 SVG 图标
- [x] **分页导航** — `‹ Prev` + 页码 + `Next ›`，5 条/页

### V1 Tags System
- [x] **标签云** — `/tags/` 从所有内容 frontmatter 自动生成
- [x] **独立标签页** — `/tags/:tag/` 列出包含该标签的所有内容

### V1 Search
- [x] **搜索页** — `/search/`，客户端实时过滤
- [x] **搜索范围** — 标题、摘要、标签、知识域
- [x] **预嵌入数据** — 所有公开内容以 JSON 嵌入页面

### 内容
- [x] 品牌名 **「王十二的小站」**
- [x] 所有内容添加 `date` 字段
- [x] 2 个知识域（DSP、Satellite Communication）
