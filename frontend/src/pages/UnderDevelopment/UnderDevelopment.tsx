import "./UnderDevelopment.css";
import constructionIcon from "../../assets/construction_icon.svg";

function UnderDevelopment() {
  return (
    <main className="development-page">
      <div className="development-container">

        {/* Logo */}
        <div className="development-logo">
          <img src={constructionIcon} alt="Construction icon" />
        </div>

        {/* Development Card */}
        <div className="development-card">
          <div className="development-icon">⚙</div>

          <h1>Under Development</h1>

          <p>
            This page is currently under development.
            <br />
            Check back soon for updates.
          </p>
        </div>

        {/* Back to Home */}
        <a href="/" className="back-home-link">
          ← Back to Home
        </a>

      </div>
    </main>
  );
}

export default UnderDevelopment;