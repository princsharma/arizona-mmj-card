"use client";

import { useEffect, useRef } from "react";

const badges = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "HIPAA Compliant",
    sub: "Bank-level security",
  },
  {
    icon: "fa-solid fa-award",
    title: "Licensed Doctors",
    sub: "Board certified",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Same Day Approval",
    sub: "Fast turnaround",
  },
  {
    icon: "fa-regular fa-heart",
    title: "Money-Back",
    sub: "If not approved",
  },
];

export default function Badges() {
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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="badges" aria-label="Trust badges">
      <div className="badge-grid" ref={wrap}>
        {badges.map((b, i) => (
          <div
            key={b.title}
            className="badge reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="badge-icon">
              <i className={b.icon} aria-hidden="true"></i>
            </div>
            <h4>{b.title}</h4>
            <p>{b.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
