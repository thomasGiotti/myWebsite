"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let frame: number;
    const animate = () => {
      if (cursor) {
        // effet de suivi fluide
        cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 rounded-full bg-white opacity-80 mix-blend-difference"
      style={{ transition: "transform 0.05s linear" }}
    />
  );
}