# Security And Abuse Prevention

## Why

The challenge asks for measures to prevent abuse. The goal is not to build a full security platform, but to address the obvious risks of a public URL shortener.

## How

Add lightweight protections close to the input and redirect boundaries. Keep them simple, explicit and documented.

Security rules may be enforced in the engine when they are domain rules, or in `applications/web` when they depend on HTTP/runtime context.

## Checklist

- [ ] Reject non-HTTP(S) URLs.
- [ ] Reject malformed URLs with user-friendly errors.
- [ ] Reject URLs that point back to the shortener service when possible.
- [ ] Add a maximum original URL length.
- [ ] Generate non-guessable short codes with enough entropy.
- [ ] Ensure code collisions are handled safely.
- [ ] Consider basic per-IP rate limiting for URL creation.
- [ ] Avoid exposing stack traces or internal errors in production responses.
- [ ] Document which abuse-prevention measures were implemented.
