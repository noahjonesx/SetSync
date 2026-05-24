import type { ClashfinderResponse, FestivalSet } from './types';

function slug(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function toISODay(datetime: string): string {
  return datetime.slice(0, 10);
}

export function normalize(festivalSlug: string, data: ClashfinderResponse): FestivalSet[] {
  const sets: FestivalSet[] = [];

  // Staged format: { stages: [{ name, events: [...] }] }
  if (data.stages?.length) {
    for (const stage of data.stages) {
      for (const event of stage.events) {
        const id = `${festivalSlug}-${slug(stage.name)}-${slug(event.name)}-${event.start}`;
        sets.push({
          id,
          festivalSlug,
          artist: event.name,
          stage: stage.name,
          day: toISODay(event.start),
          startTime: event.start,
          endTime: event.end ?? null,
          source: 'clashfinder',
        });
      }
    }
    return sets;
  }

  // Flat format: { events: [{ name, location (stage), start, end }] }
  if (data.events?.length) {
    for (const event of data.events) {
      const stageName = event.location ?? 'Unknown Stage';
      const id = `${festivalSlug}-${slug(stageName)}-${slug(event.name)}-${event.start}`;
      sets.push({
        id,
        festivalSlug,
        artist: event.name,
        stage: stageName,
        day: toISODay(event.start),
        startTime: event.start,
        endTime: event.end ?? null,
        source: 'clashfinder',
      });
    }
  }

  return sets;
}
