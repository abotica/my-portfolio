import { access } from 'fs/promises';
import { join } from 'path';

export async function fileExistsInProject(relativePath: string) {
  try {
    const fullPath = join(process.cwd(), relativePath);
    await access(fullPath);
    return true;
  } catch {
    return false;
  }
}