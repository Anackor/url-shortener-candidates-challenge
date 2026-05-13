# Persistence

## Why

The current data store is in memory and disappears on restart. The challenge explicitly asks for persistence and a repository pattern or similar abstraction.

## How

Use Prisma with PostgreSQL from the existing Docker Compose stack. Prisma belongs to the web application infrastructure, not the engine.

The repository interface should live in `libs/engine`; the Prisma implementation should live under `applications/web/app/server`.

## Checklist

- [ ] Add Prisma dependencies to `applications/web`.
- [ ] Add Prisma schema under `applications/web`.
- [ ] Configure `DATABASE_URL` usage through server config.
- [ ] Create the `ShortUrl` model.
- [ ] Add an initial migration.
- [ ] Add a Docker-based migration command.
- [ ] Create `db.server.ts`.
- [ ] Implement `PrismaShortUrlRepository`.
- [ ] Map Prisma records to engine domain types.
- [ ] Keep Prisma types out of `libs/engine`.
- [ ] Verify data survives container restarts.
