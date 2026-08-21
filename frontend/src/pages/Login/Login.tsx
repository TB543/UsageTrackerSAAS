import "./Login.css";
import coinLogo from "../../assets/coin_logo.svg";

function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login submitted!");
  };

  return (
    <main className="login-page">
      <div className="login-container">

        {/* Logo */}
        <div className="login-logo">
          <img src={coinLogo} alt="Coin logo" />
        </div>

        {/* Login Card */}
        <div className="login-card">
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
              />
            </div>

            <div className="login-options">
              <button type="submit" className="login-submit">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="login-links">
          <a href="/signup">Don't have an account?</a>
        </div>

        <a href="/" className="back-home-link">
          ← Back to Home
        </a>

      </div>
    </main>
  );
}

export default Login;