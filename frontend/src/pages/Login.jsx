import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("userAccount")
    );

    if (!savedUser) {
      alert(
        "No account found. Please create an account first."
      );
      navigate("/signup");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(savedUser)
      );

      alert(`Welcome back, ${savedUser.name}! 🎉`);

      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-left">

          <div className="auth-brand">
            🎬 Movie<span>Hub</span>
          </div>

          <div className="auth-left-content">

            <span className="auth-tag">
              YOUR CINEMA EXPERIENCE
            </span>

            <h1>
              Movies are
              <br />
              better together.
            </h1>

            <p>
              Discover amazing movies, choose
              your favorite seats and book your
              tickets in just a few clicks.
            </p>

            <div className="auth-features">

              <div>
                <span>🎬</span>
                <p>Latest Movies</p>
              </div>

              <div>
                <span>💺</span>
                <p>Best Seats</p>
              </div>

              <div>
                <span>🎟️</span>
                <p>Easy Booking</p>
              </div>

            </div>

          </div>

        </div>

        <div className="auth-right">

          <div className="auth-card">

            <div className="auth-icon">
              🔐
            </div>

            <h2>Welcome Back!</h2>

            <p className="auth-subtitle">
              Login to your MovieHub account
            </p>

            <form onSubmit={handleLogin}>

              <div className="input-group">
                <label>Email Address</label>

                <div className="input-box">
                  <span>✉️</span>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="input-group">

                <div className="password-label">
                  <label>Password</label>
                  <span>Forgot password?</span>
                </div>

                <div className="input-box">
                  <span>🔒</span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword
                      ? "🙈"
                      : "👁️"}
                  </button>

                </div>

              </div>

              <button
                type="submit"
                className="auth-submit"
              >
                Login
                <span>→</span>
              </button>

            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <button
              className="guest-login"
              onClick={() =>
                navigate("/movies")
              }
            >
              Continue as Guest
            </button>

            <p className="account-text">
              Don't have an account?
              <Link to="/signup">
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;