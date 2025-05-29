"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  dy: number;
  opacity: number;
  opacityDirection: number;
};

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const smoothedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    smoothedMouse.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const layers = [0.2, 0.5, 1]; // slow → fast
    const stars: Star[] = [];

    for (const speed of layers) {
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.3,
          dy: speed * (0.1 + Math.random() * 0.3),
          opacity: Math.random() * 0.5 + 0.5,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }

    function draw() {
      if (!ctx) return;

      // Mise à jour lissage position souris (lent)
      smoothedMouse.current.x += (mousePos.current.x - smoothedMouse.current.x) * 0.05;
      smoothedMouse.current.y += (mousePos.current.y - smoothedMouse.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Centre de l'écran
      const centerX = width / 2;
      const centerY = height / 2;

      for (const star of stars) {
        // Calcul offset discret en fonction de la position souris lissée - centre
        const offsetX = (smoothedMouse.current.x - centerX) * star.r * 0.02; // facteur faible
        const offsetY = (smoothedMouse.current.y - centerY) * star.r * 0.02;

        star.y += star.dy;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        // Clignotement
        star.opacity += 0.005 * star.opacityDirection;
        if (star.opacity <= 0.3 || star.opacity >= 1) {
          star.opacityDirection *= -1;
        }

        ctx.beginPath();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "white";
        ctx.arc(star.x + offsetX, star.y + offsetY, star.r, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-black" />
      <div className="fixed inset-0 -z-10 bg-gradient-radial-violet opacity-10" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-0 w-full h-full bg-transparent"
      />
    </>
  );
}