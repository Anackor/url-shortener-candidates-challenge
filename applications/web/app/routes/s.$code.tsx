import { redirect } from "react-router";
import type { Route } from "./+types/s.$code";
import { resolveShortUrl, ShortUrlError } from "@url-shortener/engine";
import { shortUrlRepository } from "~/server/short-url-dependencies.server";

export async function loader({ params }: Route.LoaderArgs) {
  const { code } = params;

  try {
    const shortUrl = await resolveShortUrl(
      { code },
      { repository: shortUrlRepository },
    );

    return redirect(shortUrl.originalUrl);
  } catch (error) {
    if (
      error instanceof ShortUrlError &&
      (error.code === "short_url_not_found" ||
        error.code === "invalid_short_code")
    ) {
      throw new Response("Not Found", { status: 404 });
    }

    throw error;
  }
}
