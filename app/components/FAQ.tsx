"use client";

import { useState } from "react";

const items = [
  {
    q: "What is an Arizona medical marijuana card?",
    a: "It is an official ID issued by the Arizona Department of Health Services that allows approved patients to legally access medical cannabis.",
  },
  {
    q: "Who qualifies for a medical marijuana card Arizona?",
    a: "You must be an Arizona resident with a qualifying condition evaluated by a licensed physician to receive an MMJ card in Arizona.",
  },
  {
    q: "Can I apply for an Arizona Medical Marijuana Card Online?",
    a: "Yes. Arizona allows you to complete your evaluation and application digitally.",
  },
  {
    q: "How much does an MMJ card in Arizona cost?",
    a: "Costs include the physician consultation and the state fee, which is typically $150, or $75 for qualifying patients.",
  },
  {
    q: "How long is the AZ medical card valid?",
    a: "The card is valid for two years before renewal is required.",
  },
  {
    q: "Where can I use my card?",
    a: "You can visit licensed dispensaries throughout Arizona.",
  },
  {
    q: "Can I apply with an MMJ Doctor Arizona online?",
    a: "Yes, you can consult with an MMJ Doctor Arizona through a secure online evaluation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <i className="fa-regular fa-comment" aria-hidden="true"></i> FAQ
          </span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`faq-item${isOpen ? " open" : ""}`}
              >
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}{" "}
                  <span className="chev">
                    <i
                      className="fa-solid fa-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
                <div
                  className="faq-a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
