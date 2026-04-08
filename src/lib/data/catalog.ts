//! Fetches theme catalog from skinbank API

import { env } from '$env/dynamic/private';

const SKINBANK_API_URL = env.SKINBANK_API_URL ?? 'https://skinbank.gitsk.in/v1';

export interface ThemeMeta {
  id: string;
  name: string;
  author: string;
  description: string;
  version: string;
  level: number;
  tags: string[];
  preview: string;
  downloads: number;
  verified: boolean;
}

export interface Catalog {
  themes: ThemeMeta[];
  updated: string;
}

export async function fetchCatalog(): Promise<Catalog> {
  const res = await fetch(`${SKINBANK_API_URL}/catalog.json`);
  if (!res.ok) throw new Error(`Failed to fetch catalog: ${res.status}`);
  return res.json();
}

export async function fetchTheme(id: string): Promise<ThemeMeta | undefined> {
  const catalog = await fetchCatalog();
  return catalog.themes.find((t) => t.id === id);
}
