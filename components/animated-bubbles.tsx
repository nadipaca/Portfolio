"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export function AnimatedBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize bubbles
    const initBubbles = () => {
      bubblesRef.current = [];
      const bubbleCount = 20;
      const colors = [
        "rgba(251, 191, 36, 0.5)",   // Yellow/amber - more vibrant
        "rgba(251, 191, 36, 0.4)",   // Lighter yellow
        "rgba(245, 158, 11, 0.45)",  // Orange-yellow
        "rgba(234, 179, 8, 0.4)",    // Gold
        "rgba(252, 211, 77, 0.35)",  // Light yellow
      ];

      for (let i = 0; i < bubbleCount; i++) {
        bubblesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 100 + 50, // 50-150px - larger bubbles
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initBubbles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubblesRef.current.forEach((bubble) => {
        // Update position
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Bounce off edges
        if (bubble.x < 0 || bubble.x > canvas.width) bubble.speedX *= -1;
        if (bubble.y < 0 || bubble.y > canvas.height) bubble.speedY *= -1;

        // Keep bubbles within bounds
        bubble.x = Math.max(0, Math.min(canvas.width, bubble.x));
        bubble.y = Math.max(0, Math.min(canvas.height, bubble.y));

        // Draw bubble with gradient for 3D effect
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        
        // Create more vibrant gradient
        const baseColor = bubble.color;
        const lightColor = baseColor.replace(/0\.[0-9]+/, "0.7");
        const midColor = baseColor.replace(/0\.[0-9]+/, "0.5");
        const edgeColor = baseColor.replace(/0\.[0-9]+/, "0.1");
        
        gradient.addColorStop(0, lightColor);
        gradient.addColorStop(0.3, midColor);
        gradient.addColorStop(0.7, baseColor);
        gradient.addColorStop(1, edgeColor);

        // Draw main bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 30;
        ctx.shadowColor = bubble.color;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size * 0.9, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Add highlight for 3D effect
        const highlightGradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.2,
          bubble.y - bubble.size * 0.2,
          0,
          bubble.x - bubble.size * 0.2,
          bubble.y - bubble.size * 0.2,
          bubble.size * 0.3
        );
        highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.beginPath();
        ctx.arc(bubble.x - bubble.size * 0.2, bubble.y - bubble.size * 0.2, bubble.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = highlightGradient;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: "multiply",
        filter: "blur(1px)",
      }}
    />
  );
}

