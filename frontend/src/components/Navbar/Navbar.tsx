import logo from "../../assets/coin_with_text_logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar-brand">
        <img
          src={logo}
          alt="TokenMeter"
          className="navbar-logo"
        />
      </a>

      <nav className="navbar-nav">
        <a href="/dashboard">Dashboard</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/docs">Docs</a>
      </nav>

      <div className="navbar-actions">
        <a href="/login" className="login-button">
          Login
        </a>

        <a href="/signup" className="signup-button">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;