//! Fetches theme catalog from skinbank API

const SKINBANK_API_URL = process.env.SKINBANK_API_URL ?? 'https://skinbank.gitsk.in/v1';

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
  try {
    const res = await fetch(`${SKINBANK_API_URL}/catalog.json`);
    if (!res.ok) return { themes: [], updated: new Date().toISOString() };
    return res.json();
  } catch {
    return { themes: [], updated: new Date().toISOString() };
  }
}

export async function fetchTheme(id: string): Promise<ThemeMeta | undefined> {
  const catalog = await fetchCatalog();
  return catalog.themes.find((t) => t.id === id);
}
