import { redirect } from "react-router";
import type { Route } from "./+types/s.$code";
import { ShortUrlError } from "@url-shortener/engine";
import { resolveShortUrlForRequest } from "~/server/short-url.server";

export async function loader({ params }: Route.LoaderArgs) {
  const { code } = params;

  try {
    const shortUrl = await resolveShortUrlForRequest({ code });

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
