// MathsRush colour palettes for the runner scene.
//   light — indigo night track under a white UI (the default)
//   dark  — slate-and-amber night mode
// True equations are green, false ones red, everywhere.

export const THEMES = {
  light: {
    name: 'light',
    accent: '#4F46E5', // MathsRush indigo
    correct: '#16A34A', // true
    wrong: '#E5484D', // false
    // runner scene
    skyTop: '#0b0a26',
    skyBottom: '#2a2577',
    horizonGlow: 'rgba(129, 140, 248, 0.35)',
    ground: '#090820',
    trackTile: '#1c1949',
    trackTileEdge: '#2b2770',
    rail: '#6d63ff',
    laneLine: 'rgba(199, 210, 254, 0.18)',
    floaters: 'rgba(199, 210, 254, 0.10)',
    signTile: '#ffffff',
    signTileEdge: '#c7cbe8',
    signText: '#16163a',
    signBoard: 'rgba(8, 7, 30, 0.6)',
    post: '#4b44b8',
    obstacle: '#1f2430',
    obstacleEdge: '#3c4459',
    obstacleText: '#ffffff',
    hazard: '#facc15',
    wallFront: '#181430',
    wallTop: '#3d3591',
    wallSide: '#100d27',
    shadow: 'rgba(0,0,0,0.35)',
  },
  dark: {
    name: 'dark',
    accent: '#F59E0B', // amber
    correct: '#22C55E',
    wrong: '#F43F5E',
    skyTop: '#05070d',
    skyBottom: '#1a2234',
    horizonGlow: 'rgba(245, 158, 11, 0.25)',
    ground: '#05070d',
    trackTile: '#151b29',
    trackTileEdge: '#232c40',
    rail: '#f59e0b',
    laneLine: 'rgba(245, 158, 11, 0.25)',
    floaters: 'rgba(245, 158, 11, 0.10)',
    signTile: '#1f2738',
    signTileEdge: '#3a4560',
    signText: '#f8fafc',
    signBoard: 'rgba(0, 0, 0, 0.5)',
    post: '#334155',
    obstacle: '#0b0f19',
    obstacleEdge: '#f59e0b',
    obstacleText: '#ffffff',
    hazard: '#fbbf24',
    wallFront: '#111827',
    wallTop: '#374151',
    wallSide: '#080b12',
    shadow: 'rgba(0,0,0,0.45)',
  },
};
