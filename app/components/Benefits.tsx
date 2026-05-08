const items = [
  {
    title: "Higher Possession Limits",
    body: "Patients can legally purchase up to 2.5 ounces of cannabis every 14 days from licensed dispensaries across Arizona.",
  },
  {
    title: "Access to Licensed Dispensaries",
    body: "Patients can purchase lab-tested cannabis products from licensed dispensaries operating under strict state regulations throughout Arizona safely.",
  },
  {
    title: "Lower Costs",
    body: "Medical patients often benefit from reduced tax rates compared to recreational cannabis purchases, helping lower overall treatment expenses significantly.",
  },
  {
    title: "Legal Protection",
    body: "Allows patients to legally possess and use cannabis under state-approved medical guidelines safely.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-head">
          <h2>Benefits of Your Medical Cannabis Card in Arizona</h2>
          <p>
            Holding a valid Medical Card in Arizona provides access to regulated
            cannabis under state protection. Here are the Benefits:
          </p>
        </div>
        <div className="benefits-grid">
          {items.map((b) => (
            <div className="benefit" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
