export interface FestivalSet {
  id: string;
  festivalSlug: string;
  artist: string;
  stage: string;
  day: string;        // ISO date: "2026-06-11"
  startTime: string;  // ISO datetime with tz: "2026-06-11T17:30:00-05:00"
  endTime: string | null;
  source: 'clashfinder' | 'llm' | 'manual';
}

// Clashfinder API response (flat event list format)
export interface ClashfinderResponse {
  name: string;
  slug: string;
  location?: string;
  start?: string;
  stages?: ClashfinderStage[];
  events?: ClashfinderEvent[];
}

export interface ClashfinderStage {
  id: string;
  name: string;
  events: ClashfinderEvent[];
}

export interface ClashfinderEvent {
  name: string;
  location?: string; // stage name (used when response is flat)
  start: string;
  end: string;
}

export interface ClashfinderAuthConfig {
  username: string;
  privateKey: string;
  authParam?: string;
  validUntil?: Date;
}
