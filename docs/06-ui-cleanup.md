# UI Cleanup

## Why

The current UI is intentionally poor. A small, clean UI demonstrates frontend quality without turning the challenge into a design-system exercise.

## How

Create a few presentational components and keep the visual design consistent, accessible and simple.

Components should receive data through props or route hooks. They must not import repositories, Prisma or server-only modules.

Use Radix through local reusable components. Pages and route modules should import project components, not Radix primitives directly. This keeps Radix replaceable and lets the project customize behavior or styling in one place.

Suggested component structure:

```txt
applications/web/app/components/
  ui/
    button.tsx
    text-field.tsx
    callout.tsx
  field-error.tsx
  shortened-url-result.tsx
  url-list.tsx
  url-shortener-form.tsx
```

Use Radix only where its accessible primitives add value. Simple elements can remain plain React components, but should still be exported through the project component layer.

## Checklist

- [ ] Add required Radix packages.
- [ ] Create a local `components/ui` layer for Radix-backed primitives.
- [ ] Ensure routes/pages import project components instead of Radix primitives directly.
- [ ] Document the Radix wrapper approach.
- [ ] Create `Button`.
- [ ] Create `TextField`.
- [ ] Create `Callout` or equivalent error/status primitive.
- [ ] Create `UrlShortenerForm`.
- [ ] Create `ShortenedUrlResult`.
- [ ] Create `UrlList`.
- [ ] Create `FieldError`.
- [ ] Add accessible labels, focus states and error announcements.
- [ ] Replace the current intentionally ugly layout.
- [ ] Add loading state during form submission.
- [ ] Disable duplicate submissions while the action is pending.
- [ ] Show created short URL clearly.
- [ ] Add convenient copy/open behavior for shortened URLs.
- [ ] Show URL list with original URL, short URL, clicks and creation date.
- [ ] Keep components free of Prisma and repository imports.
