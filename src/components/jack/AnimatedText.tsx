import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span
        style={{
          opacity,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        if (c === " ") return <span key={i}>{"\u00A0"}</span>;
        return (
          <Char
            key={i}
            char={c}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}
