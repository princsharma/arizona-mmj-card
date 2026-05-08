const steps = [
  "Schedule a renewal consultation with a licensed physician",
  "Complete your evaluation and confirm continued eligibility",
  "Submit your renewal application through ADHS and pay the renewal fee",
];

export default function Renew() {
  return (
    <section className="renew">
      <div className="container">
        <div className="section-head">
          <h2>How to Renew Your Arizona MMJ Card</h2>
          <p>
            Renewing your Arizona MMJ card is straightforward and can be
            completed online to avoid any interruption in access.
          </p>
        </div>
        <div className="renew-card">
          {steps.map((s, i) => (
            <div className="renew-step" key={i}>
              <div className="renew-num">{i + 1}</div>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
