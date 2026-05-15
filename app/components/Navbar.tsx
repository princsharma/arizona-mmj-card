"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#how", icon: "fa-solid fa-wave-square", label: "How It Works" },
  { href: "#pricing", icon: "fa-solid fa-dollar-sign", label: "Pricing" },
  { href: "#faq", icon: "fa-regular fa-comment", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Arizona MMJ home"
          title="Arizona Medical Marijuana Card — home"
        >
          <Image
            src="/arizona-logo.webp"
            alt="Arizona Medical Marijuana Card logo"
            title="Arizona MMJ"
            width={441}
            height={44}
            priority
            className="brand-logo"
            style={{ width: "auto" }}
          />
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} title={l.label}>
              <i className={l.icon} aria-hidden="true"></i> {l.label}
            </a>
          ))}
          <a
            href="#apply"
            title="Start your Arizona MMJ application"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-user-plus" aria-hidden="true"></i> Get
            Started
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i
            className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            aria-hidden="true"
          ></i>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav-mobile${open ? " open" : ""}`}
        hidden={!open}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} title={l.label} onClick={close}>
            <i className={l.icon} aria-hidden="true"></i> {l.label}
          </a>
        ))}
        <a
          href="#apply"
          title="Start your Arizona MMJ application"
          className="btn btn-primary nav-mobile-cta"
          onClick={close}
        >
          <i className="fa-solid fa-user-plus" aria-hidden="true"></i> Get
          Started
        </a>
      </div>
    </nav>
  );
}
