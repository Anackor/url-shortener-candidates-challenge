# Web Server Wiring

## Why

Routes should act as adapters, not as business logic containers. This block creates a composition root for config, database and use-case dependencies.

## How

Create `applications/web/app/server` modules for configuration, database setup, repositories and use-case factories.

This layer may depend on `libs/engine`, Prisma and runtime environment. React components should not depend on this layer.

## Checklist

- [ ] Create `applications/web/app/server`.
- [ ] Add `config.server.ts`.
- [ ] Validate required environment variables.
- [ ] Add `db.server.ts`.
- [ ] Add repository wiring.
- [ ] Add use-case dependency wiring.
- [ ] Ensure server-only files use `.server.ts`.
- [ ] Ensure React components do not import server-only modules.
