"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import heroData from "@/data/hero.json";
import siteData from "@/data/site.json";
import { Reveal } from "./Reveal";

export function Hero() {
  const { navActions, name } = siteData;
  const {
    eyebrow,
    title,
    lede,
    ctaPrimary,
    ctaSecondary,
    credits,
    badge,
    floatingCard,
    images
  } = heroData;

  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const orbRefs = useRef<HTMLDivElement[]>([]);

  const hasCarousel = images.length > 1;

  useEffect(() => {
    if (!hasCarousel) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [hasCarousel, images.length]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    orbRefs.current.forEach((orb, index) => {
      if (!orb) return;
      const intensity = (index + 1) * 20;
      orb.style.transform = `translate(${x * intensity}px, ${
        y * intensity
      }px) scale(1.05)`;
    });
  };

  const handlePointerLeave = () => {
    orbRefs.current.forEach((orb) => {
      if (!orb) return;
      orb.style.transform = "translate(0, 0) scale(1)";
    });
  };

  const slideshowImages = useMemo(
    () =>
      images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${name} portrait ${index + 1}`}
          width={900}
          height={1200}
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 540px"
          className={`slide-image ${index === activeIndex ? "active" : ""}`}
        />
      )),
    [activeIndex, images, name]
  );

  return (
    <header
      className="hero"
      id="top"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <nav className="nav" aria-label="Primary">
        <div className="logo">{name}</div>
        <div className="nav-actions">
          {navActions.map((action) => (
            <a
              key={action.label}
              className={
                action.variant === "primary" ? "primary-button" : "ghost-button"
              }
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
          <div className="hero-cta">
            <a className="primary-button" href={ctaPrimary.href}>
              {ctaPrimary.label}
            </a>
            <a className="ghost-button" href={ctaSecondary.href}>
              {ctaSecondary.label}
            </a>
          </div>
          <div className="credit-strip">
            {credits.map((credit) => (
              <span key={credit}>{credit}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={120}>
          <div className="image-frame" aria-live={hasCarousel ? "polite" : "off"}>
            <div className="slideshow">{slideshowImages}</div>
            <div className="badge">{badge}</div>
          </div>
          <div className="floating-card">
            <p className="label">{floatingCard.label}</p>
            <p className="value">{floatingCard.value}</p>
            <span>{floatingCard.detail}</span>
          </div>
        </Reveal>
      </div>

      {["orb-left", "orb-right"].map((position, index) => (
        <div
          key={position}
          className={`floating-orb ${position}`}
          ref={(el) => {
            if (el) {
              orbRefs.current[index] = el;
            }
          }}
          aria-hidden="true"
        />
      ))}
    </header>
  );
}
