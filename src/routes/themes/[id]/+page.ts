//! Build-time fetch for individual theme detail page

import { fetchTheme } from '$lib/data/catalog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
  const theme = await fetchTheme(params.id);
  if (!theme) throw error(404, 'Theme not found');
  return { theme };
};
