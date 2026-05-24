import type { FestivalSet } from '../../../services/clashfinder/types';

// Source: official Bonnaroo 2026 schedule poster (bonnaroo.com/schedule)
// All times are CDT (UTC-05:00). Subject to change — re-extract before festival week.
const FESTIVAL = 'bonnaroo2026';
const DAY = '2026-06-11';

export const bonnarooThursdaySets: FestivalSet[] = [
  {
    id: 'bonnaroo2026-what-stage-spiritual-cramp-2026-06-11T17:30:00-05:00',
    festivalSlug: FESTIVAL,
    artist: 'Spiritual Cramp',
    stage: 'What Stage',
    day: DAY,
    startTime: '2026-06-11T17:30:00-05:00',
    endTime: '2026-06-11T18:30:00-05:00',
    source: 'llm',
  },
  {
    id: 'bonnaroo2026-what-stage-vince-staples-2026-06-11T19:00:00-05:00',
    festivalSlug: FESTIVAL,
    artist: 'Vince Staples',
    stage: 'What Stage',
    day: DAY,
    startTime: '2026-06-11T19:00:00-05:00',
    endTime: '2026-06-11T20:00:00-05:00',
    source: 'llm',
  },
  {
    id: 'bonnaroo2026-what-stage-four-tet-2026-06-11T20:30:00-05:00',
    festivalSlug: FESTIVAL,
    artist: 'Four Tet',
    stage: 'What Stage',
    day: DAY,
    startTime: '2026-06-11T20:30:00-05:00',
    endTime: '2026-06-11T22:00:00-05:00',
    source: 'llm',
  },
  {
    id: 'bonnaroo2026-what-stage-skrillex-2026-06-11T22:30:00-05:00',
    festivalSlug: FESTIVAL,
    artist: 'Skrillex',
    stage: 'What Stage',
    day: DAY,
    startTime: '2026-06-11T22:30:00-05:00',
    endTime: '2026-06-12T00:00:00-05:00',
    source: 'llm',
  },
];
