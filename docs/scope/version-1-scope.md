# Version 1 Scope

## Scope Statement

Version 1 is a static or mostly static Markdown/MDX knowledge site for one person to build a long-term technical knowledge system.

The platform should make fragmented knowledge easy to capture as cards, easy to organize into knowledge domains, and easy to distill into public articles when the content becomes mature enough to share.

The first version does not require a backend service. Content is stored as files, metadata is stored in frontmatter, and public/private publishing rules are applied during build or static generation.

## In Scope

- Knowledge-map-first site structure.
- Domain grouping for DSP, satellite communication simulation, resource scheduling, and beam coverage algorithms.
- Knowledge cards as the smallest writing unit.
- Structured articles or notes as mature writing units.
- Topic pages as stable knowledge framework pages.
- Lightweight relationship fields such as `related`, `parent`, `derivedFrom`, and `relatedCards`.
- Markdown/MDX authoring.
- Formula rendering.
- Code highlighting.
- Image, GIF, and video embedding.
- Public/private visibility metadata.
- Local preview for draft and private content.
- Public build rules that exclude private content.

## Out Of Scope

- User login.
- Backend database.
- Web-based admin editor.
- Comment system.
- Full graph editor.
- Complex interactive simulations.
- Recommendation engine.
- Traffic analytics as a core goal.

## Ready Conditions

- This document exists in `docs/scope/version-1-scope.md`.
- Out-of-scope features are explicitly listed.
- The first version can be implemented without a backend service.
- Private/public content behavior is defined as frontmatter plus build-time filtering.
- The repository has an initial Git commit containing the scope, design, plan, and ignore rules.
