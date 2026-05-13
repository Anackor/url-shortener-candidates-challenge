export function getPublicUrl(): string {
  const publicUrl = process.env.PUBLIC_URL;

  if (!publicUrl) {
    throw new Error("PUBLIC_URL environment variable is required");
  }

  return publicUrl;
}
