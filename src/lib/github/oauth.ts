//! GitHub OAuth helpers via orderly API

const ORDERLY_API_URL = 'https://api.gitsk.in';

export function getLoginUrl(): string {
  return `${ORDERLY_API_URL}/login`;
}

export function getLogoutUrl(): string {
  return `${ORDERLY_API_URL}/logout`;
}
