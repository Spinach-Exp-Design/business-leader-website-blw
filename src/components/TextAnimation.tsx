"use client";
import React, { useEffect, useRef } from "react";

interface TextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: keyof React.JSX.IntrinsicElements;
  start?: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.4,
  tag = "div",
  start = "top 85%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef?.current || !text) return;

    let ctx: gsap.Context;

    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Set initial state
        gsap.set(containerRef.current, {
          opacity: 0,
          y: 30,
          willChange: "transform, opacity",
        });

        // Animate the entire text block as one
        gsap.to(containerRef.current, {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: "power2.out",
          delay: tag === "p" ? 0.4 : delay,
          clearProps: "willChange",
          scrollTrigger: {
            trigger: containerRef?.current,
            start: tag === "p" ? "top 100%" : start,
            once: true,
          },
        });
      }, containerRef);
    })();

    return () => ctx?.revert();
  }, [text, delay, duration, start, tag]);

  if (!text) return null;

  return (
    <div
      ref={containerRef}
      className={`${className} opacity-0`}
      aria-label={text?.toString() || ""}
    >
      {text}
    </div>
  );
};

export default TextAnimation;
