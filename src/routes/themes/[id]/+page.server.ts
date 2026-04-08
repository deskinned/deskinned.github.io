//! Build-time fetch for individual theme detail page

import { fetchCatalog, fetchTheme } from '$lib/data/catalog';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
  const catalog = await fetchCatalog();
  return catalog.themes.map((t) => ({ id: t.id }));
};

export const load: PageServerLoad = async ({ params }) => {
  const theme = await fetchTheme(params.id);
  if (!theme) throw error(404, 'Theme not found');
  return { theme };
};
