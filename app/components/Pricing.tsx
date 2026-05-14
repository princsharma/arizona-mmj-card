const popularFeatures = [
  "Certification",
  "Online consultation with a licensed physician",
  "Medical marijuana recommendation",
  "Personalized guidance",
  "100% money-back guarantee if not approved",
  "24/7 support",
];

const renewalFeatures = [
  "Annual renewal evaluation",
  "Quick online consultation",
  "Updated certification",
  "Same-day appointments available",
  "24/7 support",
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">
            <i className="fa-solid fa-dollar-sign" aria-hidden="true"></i>{" "}
            Transparent Pricing
          </span>
          <h2>Transparent Pricing You Can Trust</h2>
          <p>
            Our pricing is designed to be clear and straightforward, so you can
            move forward without uncertainty.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="price-card popular">
            <div className="popular-tag">
              <i className="fa-solid fa-star" aria-hidden="true"></i>MOST POPULAR
            </div>
            <h3>New MMJ Card</h3>
            <div className="price">$149</div>
            <ul className="price-list">
              {popularFeatures.map((f) => (
                <li key={f}>
                  <i
                    className="fa-regular fa-circle-check"
                    aria-hidden="true"
                  ></i>{" "}
                  {f}
                </li>
              ))}
            </ul>
            <a href="#apply" className="price-cta">
              Apply for Your Card{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="price-card">
            <h3>Card Renewal</h3>
            <div className="price">$129</div>
            <ul className="price-list">
              {renewalFeatures.map((f) => (
                <li key={f}>
                  <i
                    className="fa-regular fa-circle-check"
                    aria-hidden="true"
                  ></i>{" "}
                  {f}
                </li>
              ))}
            </ul>
            <a href="#apply" className="price-cta">
              Renew Your Card{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <p className="pricing-note">
          Note: The Arizona state application fee is paid separately through the
          Arizona Department of Health Services.
        </p>
      </div>
    </section>
  );
}
