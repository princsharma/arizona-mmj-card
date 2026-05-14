import Image from "next/image";

type Trust =
  | { kind: "image"; src: string; title: string; sub: string }
  | { kind: "icon"; icon: string; title: string; sub: string };

const trust: Trust[] = [
  {
    kind: "image",
    src: "/connect-doctor/24-hour-appointments.webp",
    title: "24 Hour Appointments",
    sub: "Flexible scheduling options",
  },
  {
    kind: "icon",
    icon: "fa-solid fa-lock",
    title: "100% Confidential",
    sub: "Secure and private platform",
  },
  {
    kind: "icon",
    icon: "fa-solid fa-user-doctor",
    title: "Licensed Doctors",
    sub: "Experienced Arizona physicians",
  },
];

export default function ConnectDoctor() {
  return (
    <section className="connect-doctor">
      <div className="container">
        <div className="connect-inner">
          <h2>Connect With a Doctor for Your Medical Marijuana Card in Arizona</h2>
          <p className="connect-lead">
            Licensed physicians provide secure consultations designed to guide
            patients through every step of getting an AZ medical marijuana card
            with clarity and confidence.
          </p>
          <div className="connect-ctas">
            <a href="#apply" className="btn btn-primary btn-lg">
              Schedule Consultation{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#how" className="btn btn-outline btn-lg">
              Learn More
            </a>
          </div>
          <ul className="connect-trust">
            {trust.map((t) => (
              <li key={t.title}>
                <span className="connect-trust-icon">
                  {t.kind === "image" ? (
                    <Image
                      src={t.src}
                      alt=""
                      width={28}
                      height={28}
                      aria-hidden="true"
                    />
                  ) : (
                    <i className={t.icon} aria-hidden="true"></i>
                  )}
                </span>
                <strong>{t.title}</strong>
                <span className="connect-trust-sub">{t.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
