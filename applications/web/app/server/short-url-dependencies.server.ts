import { randomInt } from "node:crypto";
import type {
  CodeGenerator,
  ShortCode,
  ShortUrl,
  ShortUrlRepository,
} from "@url-shortener/engine";

class InMemoryShortUrlRepository implements ShortUrlRepository {
  private readonly shortUrls = new Map<ShortCode, ShortUrl>();

  async findByCode(code: ShortCode): Promise<ShortUrl | null> {
    return this.shortUrls.get(code) ?? null;
  }

  async findAll(): Promise<ShortUrl[]> {
    return Array.from(this.shortUrls.values()).sort(
      (first, second) => second.createdAt.getTime() - first.createdAt.getTime(),
    );
  }

  async save(shortUrl: ShortUrl): Promise<void> {
    this.shortUrls.set(shortUrl.code, shortUrl);
  }

  async incrementClicks(code: ShortCode): Promise<void> {
    const shortUrl = this.shortUrls.get(code);

    if (!shortUrl) {
      return;
    }

    this.shortUrls.set(code, {
      ...shortUrl,
      clickCount: shortUrl.clickCount + 1,
      updatedAt: new Date(),
    });
  }
}

class RandomCodeGenerator implements CodeGenerator {
  private static readonly alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  generate(): string {
    let code = "";

    for (let index = 0; index < 8; index++) {
      code += RandomCodeGenerator.alphabet[
        randomInt(RandomCodeGenerator.alphabet.length)
      ];
    }

    return code;
  }
}

export const shortUrlRepository = new InMemoryShortUrlRepository();
export const codeGenerator = new RandomCodeGenerator();
