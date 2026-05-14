"use client";

import { useMemo, useState } from "react";

const conditions = [
  "Glaucoma",
  "Cancer",
  "HIV/AIDS",
  "Hepatitis C",
  "Amyotrophic lateral sclerosis (ALS)",
  "Crohn's disease",
  "Alzheimer's disease (agitation related)",
  "Post-traumatic stress disorder (PTSD)",
  "Severe or chronic pain",
  "Severe nausea",
  "Seizures (including epilepsy)",
  "Persistent muscle spasms (including multiple sclerosis)",
  "Cachexia or wasting syndrome",
];

export default function Conditions() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return conditions;
    return conditions.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="conditions">
      <div className="container">
        <div className="section-head">
          <h2>
            Qualifying Conditions for a
            <br />
            Medical Marijuana Card in Arizona
          </h2>
          <p>
            To qualify for an Arizona medical marijuana card, patients must have
            a &ldquo;debilitating medical condition&rdquo; as defined under
            A.R.S. § 36-2801 and receive written certification from a licensed
            physician under the Arizona Department of Health Services (ADHS).
          </p>
        </div>
        <div className="search-wrap">
          <input
            className="search-input"
            placeholder="Search conditions..."
            type="search"
            aria-label="Search qualifying conditions"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="cond-card">
          <div className="cond-grid">
            {filtered.map((c) => (
              <div className="cond" key={c}>
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="cond-foot">
          <p>
            A physician must evaluate your medical history and confirm that your
            condition meets Arizona&apos;s legal criteria before certification.
          </p>
          <a href="#apply" className="btn-teal">
            Check Your Eligibility
          </a>
        </div>
      </div>
    </section>
  );
}
