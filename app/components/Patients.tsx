"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    cls: "pat-card-1",
    icon: "fa-solid fa-user-doctor",
    title: "Licensed Arizona Physicians",
    caption:
      "Board-certified doctors specialized in medical cannabis evaluations",
  },
  {
    cls: "pat-card-2",
    icon: "fa-solid fa-video",
    title: "Convenient Video Consultations",
    caption: "Secure HIPAA-compliant appointments from your home",
  },
  {
    cls: "pat-card-3",
    icon: "fa-solid fa-shield",
    title: "Reliable Process",
    caption: "Bank-level encryption protects all your medical information",
  },
];

export default function Patients() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = wrap.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!items || items.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="patients" aria-labelledby="patients-heading">
      <div className="container">
        <div className="section-head">
          <h2 id="patients-heading">Why Patients Choose Us</h2>
          <p>Professional care, secure platform, and patient-focused service</p>
        </div>
        <div className="pat-cards-wrap" ref={wrap}>
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={`pat-card ${c.cls}`}>
                <div className="pat-card-bg" aria-hidden="true" />
                <div className="icon-tile">
                  <i className={c.icon} aria-hidden="true"></i>
                </div>
                <h3>{c.title}</h3>
              </div>
              <p className="pat-caption">{c.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
