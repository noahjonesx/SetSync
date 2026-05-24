import { buildAuthParams, buildPublicKey } from './auth';
import { normalize } from './normalize';
import type { ClashfinderAuthConfig, ClashfinderResponse, FestivalSet } from './types';

const BASE = 'https://clashfinder.com';

export async function fetchFestivalSets(
  slug: string,
  auth: ClashfinderAuthConfig,
): Promise<FestivalSet[]> {
  const publicKey = await buildPublicKey(auth);
  const authParams = buildAuthParams(auth.username, publicKey, auth.authParam, auth.validUntil);

  const qs = new URLSearchParams(authParams).toString();
  const url = `${BASE}/data/event/${slug}.json?${qs}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Clashfinder fetch failed: ${res.status} ${res.statusText}`);
  }

  const data: ClashfinderResponse = await res.json();
  return normalize(slug, data);
}

// Fetch list of available festivals (no auth required per API docs)
export async function fetchFestivalList(): Promise<{ name: string; slug: string }[]> {
  const res = await fetch(`${BASE}/data/events/core.json`);
  if (!res.ok) throw new Error(`Clashfinder list fetch failed: ${res.status}`);
  return res.json();
}
