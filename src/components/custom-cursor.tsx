'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;
    let lastFrame = 0;
    let mousePosition = { x: 0, y: 0 };
    let dots: Dot[] = [];
    let timeoutID: ReturnType<typeof setTimeout>;
    let idle = false;

    class Dot {
      index: number;
      anglespeed: number;
      x: number;
      y: number;
      scale: number;
      range: number;
      element: HTMLSpanElement;
      lockX?: number;
      lockY?: number;
      angleX?: number;
      angleY?: number;

      constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - width / 2 * this.scale + 2;
        this.element = document.createElement('span');
        this.element.style.position = 'absolute';
        this.element.style.display = 'block';
        this.element.style.width = '26px';
        this.element.style.height = '26px';
        this.element.style.borderRadius = '20px';
        this.element.style.backgroundColor = '#fff';
        this.element.style.transform = `translate(-50%, -50%) scale(${this.scale})`;
        if (cursor) cursor.appendChild(this.element);
      }

      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
      }

      draw() {
        if (!idle || this.index <= sineDots) {
          this.element.style.transform = `translate(${this.x}px, ${this.y}px) translate(-50%, -50%) scale(${this.scale})`;
        } else {
          this.angleX! += this.anglespeed;
          this.angleY! += this.anglespeed;
          this.y = this.lockY! + Math.sin(this.angleY!) * this.range;
          this.x = this.lockX! + Math.sin(this.angleX!) * this.range;
          this.element.style.transform = `translate(${this.x}px, ${this.y}px) translate(-50%, -50%) scale(${this.scale})`;
        }
      }
    }

    function buildDots() {
      for (let i = 0; i < amount; i++) {
        let dot = new Dot(i);
        dots.push(dot);
      }
    }

    function goInactive() {
      idle = true;
      dots.forEach(dot => dot.lock());
    }

    function resetIdleTimer() {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(goInactive, idleTimeout);
      idle = false;
    }

    function onMouseMove(event: MouseEvent) {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    }

    function onTouchMove(event: TouchEvent) {
      mousePosition.x = event.touches[0].clientX - width / 2;
      mousePosition.y = event.touches[0].clientY - width / 2;
      resetIdleTimer();
    }

    function positionCursor() {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index) => {
        let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw();
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    }

    function render() {
      positionCursor();
      requestAnimationFrame(render);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    buildDots();
    const animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      clearTimeout(timeoutID);
      cancelAnimationFrame(animId);
      dots.forEach(dot => dot.element.remove());
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          html, body, * {
            cursor: none !important;
          }
          a, button, [role="button"] {
            cursor: none !important;
          }
        }
        @media screen and (max-width: 480px) {
          .custom-cursor { display: none !important; }
        }
      `}} />
      {/* SVG filtro goo */}
      <svg className="ink-icon" style={{ position: 'absolute', width: 0, height: 0 }} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          display: 'block',
          top: 0,
          left: 0,
          zIndex: 99999,
          filter: 'url("#goo")',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
