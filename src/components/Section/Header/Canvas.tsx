import { FC, useEffect, useRef } from 'react';

import { m } from 'framer-motion';
import styles from './index.module.css';

export const canvasImages = [
  'html',
  'css',
  'javascript',
  'react',
  'typescript',
  'nodejs',
  'tailwindcss',
  'sass',
  'next',
  'vscode',
  'git',
  'vite',
  'prisma',
].map(
  (icon) =>
    `https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`,
);

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const images = canvasImages.map((source) => {
      const image = document.createElement('img');
      image.src = source;
      return image;
    });

    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      angle: number;
      size: number;
      image: HTMLImageElement;

      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        angle: number,
        size: number,
        image: HTMLImageElement,
      ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.angle = angle;
        this.size = size;
        this.image = image;
      }

      update() {
        if (this.x < this.size / 2) this.dx = -this.dx;
        if (this.x > innerWidth - this.size / 2) this.dx = -this.dx;
        if (this.y < this.size / 2) this.dy = -this.dy;
        if (this.y > innerHeight - this.size / 2) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
        this.angle += 1;

        this.draw();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));

        ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    let particles: Particle[] = [];

    let expectedSize = Math.round(innerWidth / 20);
    let SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;

    const setup = () => {
      let expectedSize = Math.round(innerWidth / 20);
      SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;

      particles = images.map(
        (image) =>
          new Particle(
            SIZE + Math.random() * (innerWidth - SIZE * 2),
            SIZE + Math.random() * (innerHeight - SIZE * 2),
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            0,
            SIZE,
            image,
          ),
      );

      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      particles.forEach((particle) => {
        particle.update();
      });
    };

    setup();
    animate();

    window.addEventListener('resize', setup);
  }, []);

  return (
    <m.canvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 0.4, delay: 1.4 }}
      ref={canvasRef}
      className={styles.canvas}
    />
  );
};

export default Canvas;
