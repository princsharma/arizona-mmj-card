const reviews = [
  {
    quote:
      "The entire process was incredibly smooth. My doctor was professional and got approved same day!",
    name: "Sarah Martinez",
    location: "Phoenix, AZ",
    tag: "Chronic Pain",
    avatar: undefined,
  },
  {
    quote:
      "I was skeptical about online consultations, but this was perfect. Same-day approval and great support!",
    name: "Michael Chen",
    location: "Tucson, AZ",
    tag: "PTSD",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
  },
  {
    quote:
      "Best decision for my health. The support team was responsive and my physician really listened.",
    name: "Jennifer Lopez",
    location: "Scottsdale, AZ",
    tag: "Arthritis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <div className="pill">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <b>4.9/5</b> • 1,000+ Reviews
          </div>
          <h2>What Our Patients Are Saying</h2>
          <p className="testimonials-sub">
            Patient experiences reflect the clarity and support provided
            throughout the evaluation process, helping individuals move forward
            with confidence.
          </p>
        </div>
        <div className="test-grid">
          {reviews.map((r) => (
            <div className="test-card" key={r.name}>
              <div className="stars" aria-hidden="true">★★★★★</div>
              <p className="quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="test-foot">
                <div
                  className="test-avatar"
                  aria-hidden="true"
                  style={
                    r.avatar
                      ? { backgroundImage: `url('${r.avatar}')` }
                      : undefined
                  }
                />
                <div className="meta">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
                <span className="tag">{r.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
