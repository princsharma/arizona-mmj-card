import Image from "next/image";
import HeroForm from "./HeroForm";

type Badge =
  | { kind: "icon"; icon: string; label: string }
  | { kind: "image"; src: string; label: string };

const trustBadges: Badge[] = [
  { kind: "icon", icon: "fa-solid fa-shield-halved", label: "HIPAA-Compliant" },
  { kind: "image", src: "/hero/money-back-guarantee.webp", label: "Money-Back Guarantee" },
  { kind: "image", src: "/hero/licensed-doctors.webp", label: "Licensed Doctors" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="rating-pill">
              <div className="avatars" aria-hidden="true">
                <span className="av1"></span>
                <span className="av2"></span>
                <span className="av3"></span>
              </div>
              <div>
                <span className="stars" aria-hidden="true">★★★★★</span>
                <b>4.9</b> • 5,000+ Patients
              </div>
            </div>
            <h1>
              Apply for an <span className="accent">Arizona Medical</span>
              Marijuana Card Online Today
            </h1>
            <p className="lede">
              Connect with <b>certified physicians</b> and begin your evaluation
              through a secure, fully online process designed for{" "}
              <span className="green">speed and compliance</span>.
            </p>
            <p className="lede">
              Fully aligned with the Arizona Department of Health Services
              (ADHS) Medical Marijuana Program, our evaluations meet all
              required legal and clinical standards for patient certification.
            </p>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-primary btn-lg">
                Start Application{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#how" className="btn btn-outline btn-lg">
                <i className="fa-solid fa-video" aria-hidden="true"></i> See How
                It Works
              </a>
            </div>
            <ul className="hero-trust">
              {trustBadges.map((b) => (
                <li key={b.label}>
                  <span className="hero-trust-icon">
                    {b.kind === "image" ? (
                      <Image
                        src={b.src}
                        alt=""
                        width={32}
                        height={32}
                        aria-hidden="true"
                      />
                    ) : (
                      <i className={b.icon} aria-hidden="true"></i>
                    )}
                  </span>
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
