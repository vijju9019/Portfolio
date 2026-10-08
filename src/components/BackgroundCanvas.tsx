import { useEffect, useRef } from 'react';

// Subtle animated gradient mesh background that adapts to Light and Dark modes
export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const dots: Array<{ x: number; y: number; vx: number; vy: number; opacity: number }> = [];
    const count = Math.min(Math.floor((width * height) / 24000), 45);

    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.25 + 0.05,
      });
    }

    let t = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // Subtle gradient orb
      const grd1 = ctx.createRadialGradient(
        width * 0.15, height * 0.25, 0,
        width * 0.15, height * 0.25, width * 0.35
      );
      grd1.addColorStop(0, isDark ? `rgba(59,130,246,${0.03 + Math.sin(t * 0.3) * 0.01})` : `rgba(59,130,246,${0.04 + Math.sin(t * 0.3) * 0.01})`);
      grd1.addColorStop(1, 'rgba(59,130,246,0)');
      ctx.fillStyle = grd1;
      ctx.fillRect(0, 0, width, height);

      const grd2 = ctx.createRadialGradient(
        width * 0.85, height * 0.75, 0,
        width * 0.85, height * 0.75, width * 0.35
      );
      grd2.addColorStop(0, isDark ? `rgba(147,51,234,${0.025 + Math.cos(t * 0.3) * 0.008})` : `rgba(147,51,234,${0.035 + Math.cos(t * 0.3) * 0.008})`);
      grd2.addColorStop(1, 'rgba(147,51,234,0)');
      ctx.fillStyle = grd2;
      ctx.fillRect(0, 0, width, height);

      // Micro particles
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${d.opacity * 0.6})`
          : `rgba(40,40,60,${d.opacity * 0.4})`;
        ctx.fill();
      });

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
