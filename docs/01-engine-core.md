# Engine Core

## Why

The current business logic is spread across React Router routes and mutable global state. This block creates a clear core that can be tested without React, Prisma or Docker.

## How

Restructure `libs/engine` around the `short-url` domain. Keep this package pure: domain rules, use cases, ports and expected application errors only.

Follow the boundaries defined in `AGENTS.md`: the engine must not import React, React Router, Prisma, Docker, environment variables or web-specific code.

## Checklist

- [ ] Create the `libs/engine/src/short-url` structure.
- [ ] Add domain types for short URLs, original URLs and short codes.
- [ ] Add URL validation and normalization rules.
- [ ] Add short-code validation rules.
- [ ] Generate unique short codes with collision handling.
- [ ] Define expected application errors.
- [ ] Define `ShortUrlRepository` port.
- [ ] Define `CodeGenerator` port.
- [ ] Implement `createShortUrl` use case.
- [ ] Implement `resolveShortUrl` use case.
- [ ] Implement `listShortUrls` use case.
- [ ] Remove `baseUrl` from the engine.
- [ ] Stop exporting mutable global state from the engine.
- [ ] Export the new public API from `libs/engine/src/index.ts`.
