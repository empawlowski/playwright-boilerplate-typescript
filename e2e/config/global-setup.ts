/* eslint-disable no-console */
import { Configuration } from '@_e2e/config/variables.config';
import * as dotenv from 'dotenv';
import * as path from 'path';

async function globalSetup(): Promise<void> {
  enum environments {
    local = 'local',
    test = 'test',
    staging = 'staging',
    prod = 'prod',
  }

  const environment = process.env['ENV'] ?? environments.test;
  dotenv.config({ path: path.resolve(`.env.${environment}`) });

  console.log('🌍 Environment: ', environment);
  console.log('🌍 URL: ', Configuration.baseURL);
  // console.log('🕵️‍♂️  User: ', Configuration.user);
  // console.log('🔐  Password: ', Configuration.password);
}

export default globalSetup;
