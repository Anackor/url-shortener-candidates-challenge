# Engine Tests

## Why

The challenge asks for maintainable code and tests for important parts. The engine is the cheapest and most valuable place to test because it contains the business rules.

## How

Add Vitest and test use cases with in-memory fakes. Do not require PostgreSQL or Docker services to test the engine behavior.

Tests should document the expected behavior of the core before web and persistence adapters are added.

## Checklist

- [ ] Add Vitest to the workspace.
- [ ] Add `test` scripts to the root and engine package.
- [ ] Configure Turbo to run tests.
- [ ] Create an in-memory repository fake for engine tests.
- [ ] Test URL validation failures.
- [ ] Test short URL creation.
- [ ] Test code collision retry behavior.
- [ ] Test successful short-code resolution.
- [ ] Test missing short-code resolution.
- [ ] Test click count increment behavior.
- [ ] Verify tests run through Docker.
