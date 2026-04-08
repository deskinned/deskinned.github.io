//! Build-time catalog fetch for theme marketplace

import { fetchCatalog } from '$lib/data/catalog';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  const catalog = await fetchCatalog();
  return { themes: catalog.themes };
};
