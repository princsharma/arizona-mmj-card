"use client";

import { useEffect } from "react";

export default function HashScroller() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as Element | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (!href || href === "#") return;

      if (href === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
        return;
      }

      const id = decodeURIComponent(href.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
