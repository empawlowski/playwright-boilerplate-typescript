import * as dotenv from 'dotenv';

dotenv.config({ override: true });

export class Configuration {
  public static get baseURL(): string {
    return process.env['BASE_URL'] ?? '[NOT SET]';
  }
}
