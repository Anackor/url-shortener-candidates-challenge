# URL Shortener

## Tech Stack

```txt
url-shortener/
  applications/web/    # React + React Router v7
  libs/engine/         # Domain logic
```

| Technology                                    | Description                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [pnpm](https://pnpm.io/)                      | Fast, disk-efficient package manager with built-in monorepo support via workspaces. Runs inside Docker |
| [Turbo](https://turbo.build/)                 | High-performance build system for monorepos. Runs tasks in parallel and caches results            |
| [React](https://react.dev/)                   | Library for building user interfaces with components                                              |
| [React Router v7](https://reactrouter.com/)   | Full-stack React framework. Handles routing, data loading, mutations and SSR                      |
| [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript for catching errors at compile time                                  |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first CSS framework for rapid UI development                                              |
| [Vite](https://vite.dev/)                     | Fast build tool and dev server with hot module replacement                                        |
| [PostgreSQL](https://www.postgresql.org/)     | Database used by the local Docker environment                                                     |

## Local Development

The local environment runs through Docker only. Node, pnpm and PostgreSQL do not need to be installed on the host machine.

```bash
docker compose up --build
```

Open `http://localhost:5173`.

The compose stack starts:

- `web`: React Router development server.
- `db`: PostgreSQL 16 with a persistent Docker volume.

## Environment

Docker Compose provides sensible defaults, so `.env` is optional for local development. To override ports, credentials or the public host:

```bash
cp .env.example .env
docker compose up --build
```

## Useful Commands

Run project commands from inside Docker:

```bash
docker compose run --rm web pnpm build
docker compose run --rm web pnpm typecheck
```

Stop the stack:

```bash
docker compose down
```

Reset the database volume:

```bash
docker compose down -v
```

## Production Image

The Dockerfile still includes a production target:

```bash
docker build --target production -t url-shortener .
docker run -p 3000:3000 -e PUBLIC_URL=http://localhost:3000 url-shortener
```
