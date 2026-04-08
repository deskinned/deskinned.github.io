//! Client-side API calls to orderly for theme submission

import { env } from '$env/dynamic/public';

const ORDERLY_API_URL = env.PUBLIC_ORDERLY_API_URL ?? 'https://api.gitsk.in';

export interface SubmitEvent {
  step: string;
  status: string;
  message: string;
}

export function submitTheme(
  skinFile: string,
  onEvent: (event: SubmitEvent) => void,
  onError: (error: string) => void,
  onDone: () => void,
): EventSource {
  const es = new EventSource(`${ORDERLY_API_URL}/submit`, {
    withCredentials: true,
  });

  es.addEventListener('step', (e) => {
    onEvent(JSON.parse(e.data));
  });

  es.addEventListener('error', (e) => {
    if (e instanceof MessageEvent) {
      const data = JSON.parse(e.data);
      onError(data.message);
    }
    es.close();
  });

  es.addEventListener('done', () => {
    onDone();
    es.close();
  });

  return es;
}
