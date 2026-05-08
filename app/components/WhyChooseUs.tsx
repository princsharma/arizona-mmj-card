const cards = [
  {
    img: "why-img-1",
    icon: "fa-solid fa-user-doctor",
    title: "Licensed Arizona Physicians",
    desc: "Speak with a doctor who evaluates your eligibility for a medical marijuana card Arizona and explains the next steps clearly.",
  },
  {
    img: "why-img-2",
    icon: "fa-solid fa-video",
    title: "Convenient Evaluation",
    desc: "Complete your entire evaluation remotely through a secure system designed to save time and avoid unnecessary in-person clinic visits.",
  },
  {
    img: "why-img-3",
    icon: "fa-solid fa-shield-halved",
    title: "Reliable Process",
    desc: "Each step is structured to be easy to follow, helping you move forward confidently without confusion or unexpected delays.",
  },
  {
    img: "why-img-4",
    icon: "fa-regular fa-circle-check",
    title: "Clear Pricing",
    desc: "You'll know the full cost before starting, allowing you to make informed decisions without worrying about hidden fees later.",
  },
  {
    img: "why-img-5",
    icon: "fa-solid fa-lock",
    title: "Secure Platform",
    desc: "Your personal and medical information is protected through a HIPAA-compliant system built to maintain privacy at every stage.",
  },
  {
    img: "why-img-6",
    icon: "fa-regular fa-heart",
    title: "Ongoing Support",
    desc: "If any questions come up, support is available to guide you through the process and help you continue without uncertainty.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-head">
          <h2>Why Arizona Patients Choose Us</h2>
          <p>
            Finding the right guidance matters. Patients across Arizona choose
            our platform because the process is clear, secure, and handled by
            experienced professionals. Each consultation is conducted by a
            certified Arizona medical marijuana doctor who understands how to
            evaluate qualifying conditions under state law.
          </p>
        </div>
        <div className="why-grid">
          {cards.map((c) => (
            <div className="why-card" key={c.title}>
              <div
                className={`why-img ${c.img}`}
                role="img"
                aria-label={c.title}
              />
              <div className="why-body">
                <div className="why-icon">
                  <i className={c.icon} aria-hidden="true"></i>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
