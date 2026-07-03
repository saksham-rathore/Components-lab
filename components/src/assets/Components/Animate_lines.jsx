import { motion } from "motion/react";

export default function Animate_lines() {
  const transition = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <svg
      width="1569"
      height="1196"
      viewBox="0 0 1569 1196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Gray background lines */}
      <path
        d="M0.658722 2.41162C1244.14 342.053 1493.14 489.929 1462.2 521.412"
        stroke="#D8D8D8"
        strokeWidth="5"
        fill="none"
      />

      <path
        d="M6.65872 295.412C1210.32 440.654 1503.49 525.263 1499.62 549.412"
        stroke="#D8D8D8"
        strokeWidth="5"
        fill="none"
      />

      <path
        d="M48.6587 598.412C1205.06 592.128 1504.16 563.127 1509.16 549.412H1535.66"
        stroke="#D8D8D8"
        strokeWidth="5"
        fill="none"
      />

      <path
        d="M48.6587 866.412C1303.93 682.562 1582.51 589.141 1564.89 565.412"
        stroke="#D8D8D8"
        strokeWidth="5"
        fill="none"
      />

      <path
        d="M48.6587 1193.41C1274.9 785.172 1570.88 626.645 1565.59 598.412"
        stroke="#D8D8D8"
        strokeWidth="5"
        fill="none"
      />

      {/* Animated beams */}
      {[
        "M0.658722 2.41162C1244.14 342.053 1493.14 489.929 1462.2 521.412",
        "M6.65872 295.412C1210.32 440.654 1503.49 525.263 1499.62 549.412",
        "M48.6587 598.412C1205.06 592.128 1504.16 563.127 1509.16 549.412H1535.66",
        "M48.6587 866.412C1303.93 682.562 1582.51 589.141 1564.89 565.412",
        "M48.6587 1193.41C1274.9 785.172 1570.88 626.645 1565.59 598.412",
      ].map((d, index) => (
        <motion.path
          key={index}
          d={d}
          stroke="url(#beam)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="0.12 1"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -1 }}
          transition={transition}
          style={{
            filter: "drop-shadow(0 0 8px #8B5CF6)",
          }}
        />
      ))}
    </svg>
  );
}