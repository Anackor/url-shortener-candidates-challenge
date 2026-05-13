import { randomInt } from "node:crypto";
import type { CodeGenerator } from "@url-shortener/engine";
import { prisma } from "./db.server";
import { PrismaShortUrlRepository } from "./repositories/prisma-short-url-repository.server";

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

export const shortUrlRepository = new PrismaShortUrlRepository(prisma);
export const codeGenerator = new RandomCodeGenerator();
