import "./NotFound.css";
import errorIcon from "../../assets/404_icon.svg";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-container">

        {/* Logo */}
        <div className="not-found-logo">
          <img src={errorIcon} alt="Error icon" />
        </div>

        {/* 404 Card */}
        <div className="not-found-card">
          <div className="not-found-code">404</div>

          <h1>Page Not Found</h1>

          <p>
            Sorry, the page you're looking for doesn't exist.
            <br />
            It may have been moved or removed.
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

export default NotFound;