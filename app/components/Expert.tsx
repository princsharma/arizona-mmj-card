import Image from "next/image";

export default function Expert() {
  return (
    <section className="expert">
      <div className="container">
        <div className="expert-grid">
          <div className="expert-image">
            <Image
              src="/expert/doctors.webp"
              alt="Licensed Arizona medical marijuana doctors providing online evaluations"
              title="Licensed Arizona Medical Professionals"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              priority={false}
              style={{ objectFit: "cover" }}
            />
            <div className="expert-stats-card">
              <div className="stat">
                <div className="num expert-trust-num">
                  <i
                    className="fa-solid fa-circle-check"
                    aria-hidden="true"
                  ></i>
                </div>
                <span>Board-Certified</span>
              </div>
              <div className="stat">
                <div className="num expert-trust-num">
                  <i
                    className="fa-solid fa-shield-halved"
                    aria-hidden="true"
                  ></i>
                </div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="stat">
                <div className="num expert-trust-num">
                  <i
                    className="fa-solid fa-scale-balanced"
                    aria-hidden="true"
                  ></i>
                </div>
                <span>100% Legal</span>
              </div>
            </div>
          </div>
          <div className="expert-content">
            <h2>Expert Care from Licensed Arizona Medical Professionals</h2>
            <p>
              Our network includes experienced physicians who specialize in
              medical cannabis evaluations and stay up to date on Arizona
              regulations. Every consultation is conducted with attention to
              detail, ensuring patients receive accurate guidance throughout the
              certification process.
            </p>
            <p>
              We recognize that applying for a medical marijuana card Arizona
              can feel unfamiliar at first. That&apos;s why our doctors take a
              practical approach, reviewing your medical history, answering
              questions clearly, and helping you understand what to expect at
              each step.
            </p>
            <div className="expert-stats-grid">
              <div className="expert-stat">
                <div className="num">5,000+</div>
                <span>Patients Served</span>
              </div>
              <div className="expert-stat">
                <div className="num">4.9/5</div>
                <span>Average Rating</span>
              </div>
              <div className="expert-stat">
                <div className="num">24hr</div>
                <span>Avg. Appointment Time</span>
              </div>
              <div className="expert-stat">
                <div className="num">98%</div>
                <span>Patient Approval Rate</span>
              </div>
            </div>
            <div className="expert-cta">
              <a
                href="#apply"
                title="Start your Arizona MMJ application today"
                className="btn btn-primary btn-lg"
              >
                Start Your Journey Today{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
