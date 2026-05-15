import Image from "next/image";

const steps = [
  {
    n: "01",
    image: "/how-it-works/create-account.webp",
    title: "Create Your Account",
    desc: "Sign up and fill in your details to begin your application for an MMJ card in Arizona.",
  },
  {
    n: "02",
    image: "/how-it-works/schedule-evaluation.webp",
    title: "Schedule Your Evaluation",
    desc: "Choose a time that works for you to connect with a certified physician.",
  },
  {
    n: "03",
    image: "/how-it-works/online-consultation.webp",
    title: "Attend Your Online Consultation",
    desc: "Meet with an Arizona MMJ doctor online who will review your medical history and determine eligibility.",
  },
  {
    n: "04",
    image: "/how-it-works/receive-card.webp",
    title: "Complete State Application",
    desc: "If certified by our licensed physician, submit your application through the Arizona Department of Health Services (ADHS) Patient Registry and pay the state fee. Once approved, your digital medical marijuana card is issued by the state.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <i className="fa-solid fa-gear" aria-hidden="true"></i> The Process
          </span>
          <h2>How to Get an Arizona Medical Marijuana Card Online</h2>
          <p>
            Start with a physician evaluation before completing your
            registration with the Arizona Department of Health Services, which
            oversees the state&apos;s medical cannabis program.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-icon">
                <Image
                  src={s.image}
                  alt={`${s.title} — Arizona medical marijuana card step`}
                  title={s.title}
                  width={56}
                  height={56}
                />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-cta">
          <a
            href="#apply"
            title="Consult with a licensed Arizona MMJ doctor online"
            className="btn btn-primary btn-lg"
          >
            Consult With an Arizona MMJ Doctor{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
