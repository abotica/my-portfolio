import { access } from 'fs/promises';
import { join } from 'path';

export async function fileExistsInPublic(relativePath: string) {
  try {
    const fullPath = join(process.cwd(), 'public', relativePath);
    await access(fullPath);
    return true;
  } catch {
    return false;
  }
}