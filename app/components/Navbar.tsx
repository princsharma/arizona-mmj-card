export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="Arizona MMJ home">
          <div className="brand-mark">
            <i className="fa-solid fa-leaf" aria-hidden="true"></i>
          </div>
          <div className="brand-text">
            <strong>Arizona MMJ</strong>
            <span>Licensed Medical Evaluations</span>
          </div>
        </a>
        <div className="nav-links">
          <a href="#how">
            <i className="fa-solid fa-wave-square" aria-hidden="true"></i> How It
            Works
          </a>
          <a href="#pricing">
            <i className="fa-solid fa-dollar-sign" aria-hidden="true"></i> Pricing
          </a>
          <a href="#faq">
            <i className="fa-regular fa-comment" aria-hidden="true"></i> FAQ
          </a>
          <a href="#cta" className="btn btn-primary">
            <i className="fa-solid fa-user-plus" aria-hidden="true"></i> Get
            Started
          </a>
        </div>
      </div>
    </nav>
  );
}
