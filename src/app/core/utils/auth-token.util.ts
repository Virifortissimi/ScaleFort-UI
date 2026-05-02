type JwtPayload = {
  exp?: number;
};

const LEGACY_AUTH_STORAGE_KEYS = ['scalefort_auth_token', 'scalefort_refresh_token'] as const;

export function clearLegacyAuthStorage(): void {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return;
  }

  for (const key of LEGACY_AUTH_STORAGE_KEYS) {
    window.localStorage.removeItem(key);
  }
}

export function isJwtUsable(token: string | null | undefined): token is string {
  if (!token || token.trim().length === 0) {
    return false;
  }

  const payload = decodeJwtPayload(token);
  if (!payload) {
    return false;
  }

  if (typeof payload.exp !== 'number') {
    return true;
  }

  return payload.exp * 1000 > Date.now();
}

function decodeJwtPayload(token: string): JwtPayload | null {
  const parts = token.split('.');
  if (parts.length < 2) {
    return null;
  }

  const payloadPart = parts[1];
  const normalized = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');

  try {
    const decoded = atob(padded);
    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return null;
  }
}
