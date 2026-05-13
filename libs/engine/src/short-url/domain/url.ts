import { ShortUrlError } from "../errors";

export type OriginalUrl = string & { readonly __brand: "OriginalUrl" };

const MAX_ORIGINAL_URL_LENGTH = 2048;
const ALLOWED_PROTOCOLS = new Set(["http:", "https:"]);

export function createOriginalUrl(value: string): OriginalUrl {
  const candidate = value.trim();

  if (!candidate) {
    throw new ShortUrlError("invalid_original_url", "URL is required");
  }

  if (candidate.length > MAX_ORIGINAL_URL_LENGTH) {
    throw new ShortUrlError("invalid_original_url", "URL is too long");
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(candidate);
  } catch {
    throw new ShortUrlError("invalid_original_url", "URL is invalid");
  }

  if (!ALLOWED_PROTOCOLS.has(parsedUrl.protocol)) {
    throw new ShortUrlError(
      "invalid_original_url",
      "URL protocol must be HTTP or HTTPS",
    );
  }

  return parsedUrl.toString() as OriginalUrl;
}
