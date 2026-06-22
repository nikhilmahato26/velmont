import { motion } from "framer-motion";
import { connectivityNodes } from "../../data/location";
import { viewportOnce } from "../../utils/motion";

// Minimal node-and-line connectivity diagram (UB hub at centre).
const SIZE = 400;
const C = SIZE / 2;

function polar(angle, radiusPct) {
  const rad = (angle * Math.PI) / 180;
  const r = (radiusPct / 100) * (C - 46);
  return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) };
}

export default function ConnectivityMap() {
  return (
    <motion.svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Connectivity map showing Unibera Towers at the centre with surrounding landmarks"
    >
      {/* Guide rings */}
      {[0.55, 0.85].map((r) => (
        <circle
          key={r}
          cx={C}
          cy={C}
          r={(C - 46) * r}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeDasharray="2 6"
        />
      ))}

      {connectivityNodes.map((n, i) => {
        const p = polar(n.angle, n.radius);
        const anchor = p.x > C + 10 ? "start" : p.x < C - 10 ? "end" : "middle";
        return (
          <g key={n.id}>
            <motion.line
              x1={C}
              y1={C}
              x2={p.x}
              y2={p.y}
              stroke="rgba(201,169,110,0.45)"
              strokeWidth="1"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.2 + i * 0.1 },
                },
              }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="4"
              fill="#c9a96e"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 0.6 + i * 0.1 } },
              }}
            />
            <motion.text
              x={p.x + (anchor === "start" ? 8 : anchor === "end" ? -8 : 0)}
              y={p.y + (Math.abs(p.y - C) < 10 ? -10 : 4)}
              textAnchor={anchor}
              className="fill-white/70 font-sans text-[9px] uppercase tracking-[0.18em]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.8 + i * 0.1 } },
              }}
            >
              {n.label}
            </motion.text>
          </g>
        );
      })}

      {/* Centre hub */}
      <circle cx={C} cy={C} r="30" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
      <circle cx={C} cy={C} r="22" fill="#c9a96e" />
      <text
        x={C}
        y={C + 5}
        textAnchor="middle"
        className="fill-forest font-serif text-[15px] font-medium tracking-[0.1em]"
      >
        UB
      </text>
    </motion.svg>
  );
}
