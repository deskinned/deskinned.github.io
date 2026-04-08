//! Build-time catalog fetch for theme marketplace

import { fetchCatalog } from '$lib/data/catalog';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
  const catalog = await fetchCatalog();
  return { themes: catalog.themes };
};
