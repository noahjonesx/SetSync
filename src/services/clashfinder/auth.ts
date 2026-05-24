import * as Crypto from 'expo-crypto';
import type { ClashfinderAuthConfig } from './types';

// SHA-256(username + privateKey + authParam? + validUntil?)
export async function buildPublicKey(config: ClashfinderAuthConfig): Promise<string> {
  const { username, privateKey, authParam, validUntil } = config;

  let input = username + privateKey;
  if (authParam) input += authParam;
  if (validUntil) {
    // yyyymmddhhmmss UTC
    const ts = validUntil.toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
    input += ts;
  }

  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, input);
}

export function buildAuthParams(
  username: string,
  publicKey: string,
  authParam?: string,
  validUntil?: Date,
): Record<string, string> {
  const params: Record<string, string> = {
    authUsername: username,
    authPublicKey: publicKey,
  };
  if (authParam) params.authParam = authParam;
  if (validUntil) {
    params.authValidUntil = validUntil.toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
  }
  return params;
}
