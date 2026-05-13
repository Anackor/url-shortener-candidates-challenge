# React Router Routes

## Why

The route modules currently access storage and generation logic directly. They should parse requests, call use cases and map results to HTTP or UI responses.

## How

Refactor route loaders/actions to consume server wiring and engine use cases. Keep route files thin and predictable.

Routes may depend on server wiring and engine use cases. They should not directly query the database or contain domain rules.

## Checklist

- [ ] Refactor `_index.tsx` loader to load URL statistics.
- [ ] Refactor `_index.tsx` action to create short URLs through the use case.
- [ ] Map validation errors to form feedback.
- [ ] Return meaningful action errors for invalid input and expected failures.
- [ ] Build the public shortened URL in the web layer.
- [ ] Refactor `s.$code.tsx` loader to resolve through the use case.
- [ ] Increment click statistics during resolution.
- [ ] Return a proper 404 for unknown codes.
- [ ] Avoid leaking internal error details to the UI.
- [ ] Remove direct imports of storage/generator internals from routes.
