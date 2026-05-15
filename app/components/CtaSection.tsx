const items = [
  {
    icon: "fa-regular fa-clock",
    title: "Same-Day Appointments",
    sub: "Flexible scheduling available",
  },
  {
    icon: "fa-solid fa-globe",
    title: "100% Online Process",
    sub: "No clinic visits required",
  },
  {
    icon: "fa-solid fa-user-doctor",
    title: "Licensed Arizona Physicians",
    sub: "Certified and experienced doctors",
  },
];

export default function CtaSection() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Consult with Your Doctor Today</h2>
        <p>
          Connect with a licensed physician through a secure, fully online
          process and take the next step toward getting approved.
        </p>
        <a
          href="#apply"
          title="Book your Arizona MMJ appointment now"
          className="cta-btn"
        >
          Book Your Appointment Now{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
        <ul className="cta-trust">
          {items.map((it) => (
            <li key={it.title}>
              <i className={it.icon} aria-hidden="true"></i>
              <strong>{it.title}</strong>
              <span>{it.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
