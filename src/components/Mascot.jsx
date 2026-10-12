// The MathsRush runner: a chunky orange number tile with big round eyes and
// sneakers. From behind (while running) it shows a white "+" on its back;
// from the front it has a face.

export default function Mascot({ facing = 'front', mood = 'happy', running = false, className = '', style }) {
  return (
    <svg
      className={`mascot ${running ? 'mascot--running' : ''} ${className}`}
      style={style}
      viewBox="0 0 100 124"
      role="img"
      aria-label="MathsRush runner"
    >
      {/* legs + sneakers */}
      <g className="mascot__legs">
        <g className="mascot__leg mascot__leg--l">
          <path d="M39 90 L36 108" stroke="var(--mascot-limb)" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="33" cy="111" rx="8" ry="4.5" fill="var(--mascot-limb)" />
        </g>
        <g className="mascot__leg mascot__leg--r">
          <path d="M61 90 L64 108" stroke="var(--mascot-limb)" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="67" cy="111" rx="8" ry="4.5" fill="var(--mascot-limb)" />
        </g>
      </g>
      {/* arms */}
      <g stroke="var(--mascot-limb)" strokeWidth="5" strokeLinecap="round" fill="none">
        <path className="mascot__arm mascot__arm--l" d="M17 56 L7 66 L9 74" />
        <path className="mascot__arm mascot__arm--r" d="M83 56 L93 66 L91 74" />
      </g>
      {/* body: a thick rounded tile (edge underneath gives it depth) */}
      <g stroke="var(--mascot-outline, none)" strokeWidth="3">
        <rect x="14" y="20" width="72" height="72" rx="20" fill="var(--mascot-edge)" />
        <rect x="14" y="14" width="72" height="70" rx="20" fill="var(--mascot-body)" />
      </g>
      {facing === 'back' ? (
        // the "+" badge on its back
        <g fill="#fff">
          <rect x="44" y="30" width="12" height="38" rx="5" />
          <rect x="31" y="43" width="38" height="12" rx="5" />
        </g>
      ) : (
        <g>
          {mood === 'dead' ? (
            <g stroke="#fff" strokeWidth="4.5" strokeLinecap="round">
              <path d="M31 37 L42 48 M42 37 L31 48" />
              <path d="M58 37 L69 48 M69 37 L58 48" />
            </g>
          ) : (
            <g>
              <circle cx="37" cy="43" r="10" fill="#fff" />
              <circle cx="63" cy="43" r="10" fill="#fff" />
              <circle className="mascot__pupil" cx="39" cy="45" r="4.8" fill="#16163a" />
              <circle className="mascot__pupil" cx="65" cy="45" r="4.8" fill="#16163a" />
            </g>
          )}
          {mood === 'dead' ? (
            <path d="M37 68 q6 -6 13 0 q6 6 13 0" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
          ) : mood === 'wow' ? (
            <ellipse cx="50" cy="68" rx="6" ry="7" fill="#7a2a0e" />
          ) : (
            <path d="M36 62 q14 14 28 0" stroke="#7a2a0e" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          )}
        </g>
      )}
    </svg>
  );
}
