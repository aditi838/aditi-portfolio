import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2 className="footer-logo">
          {"{ "}
          <span>aditi</span>
          {" }"}
        </h2>

        <p className="footer-tagline">
          Learning, building, and sharing along the way.
        </p>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          Built with React
        </p>

        <p className="footer-copyright">
          © {new Date().getFullYear()}
        </p>

      </div>

    </footer>
  );
}