import "./Signup.css";
import coinLogo from "../../assets/coin_logo.svg";

function Signup() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Account created!");
  };

  return (
    <main className="signup-page">
      <div className="signup-container">

        {/* Logo */}
        <div className="signup-logo">
          <img src={coinLogo} alt="Coin logo" />
        </div>

        {/* Signup Card */}
        <div className="signup-card">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                minLength={8}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                required
                minLength={8}
              />
            </div>

            <div className="signup-options">
              <button type="submit" className="signup-submit">
                Sign Up
              </button>
            </div>

          </form>
        </div>

        <div className="signup-links">
          <a href="/login">Already have an account?</a>
        </div>

        <a href="/" className="back-home-link">
          ← Back to Home
        </a>

      </div>
    </main>
  );
}

export default Signup;