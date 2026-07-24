const { createHash } = require('crypto');
const themes = require('../themes.js');

/**
 * The AI prompt baseline in uxpin-api
 * (modules/ai/prompts/mui9ThemeDefaults.json) is GENERATED from this repo's
 * themes.js (default theme, *Channel keys stripped — derived client-side).
 * The twin test over there pins the SAME hash; whenever tokens.json /
 * themes.js change, regenerate the api file and update both hashes —
 * otherwise the AI computes theme deltas against a stale baseline and
 * silently overwrites user values.
 */
const SHARED_BASELINE_SHA = '23f94cf9851921c0';

const canonicalize = (map) => Object.fromEntries(Object.entries(map).sort(([a], [b]) => (a < b ? -1 : 1)));
const stripChannels = (map) => Object.fromEntries(Object.entries(map).filter(([key]) => !key.endsWith('Channel')));

describe('themes.js parity with the uxpin-api prompt baseline', () => {
  it('matches the shared cross-repo hash (Channel keys stripped)', () => {
    const source = themes.default || themes;
    const canonical = JSON.stringify({
      light: canonicalize(stripChannels(source.light)),
      dark: canonicalize(stripChannels(source.dark)),
    });
    expect(createHash('sha256').update(canonical).digest('hex').slice(0, 16)).toBe(SHARED_BASELINE_SHA);
  });
});
