//! GitHub OAuth helpers via orderly API

import { env } from '$env/dynamic/private';

const ORDERLY_API_URL = env.ORDERLY_API_URL ?? 'https://api.gitsk.in';

export function getLoginUrl(): string {
  return `${ORDERLY_API_URL}/login`;
}

export function getLogoutUrl(): string {
  return `${ORDERLY_API_URL}/logout`;
}
