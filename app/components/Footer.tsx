export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-tagline">
            <p className="tag-line">
              Professional medical marijuana evaluations for Arizona residents.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#how">How It Works</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="contact">
              <li>
                <i className="fa-solid fa-phone" aria-hidden="true"></i> (555)
                123-4567
              </li>
              <li>
                <i className="fa-regular fa-envelope" aria-hidden="true"></i>{" "}
                gmail.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>{" "}
                Serving All Arizona
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2026 Arizona MMJ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
