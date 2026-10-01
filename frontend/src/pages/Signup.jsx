import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword
  ] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("userAccount")
    );

    if (
      existingUser &&
      existingUser.email === email
    ) {
      alert(
        "An account with this email already exists."
      );

      navigate("/login");
      return;
    }

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "userAccount",
      JSON.stringify(user)
    );

    alert(
      "🎉 Account created successfully!"
    );

    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-left signup-left">

          <div className="auth-brand">
            🎬 Movie<span>Hub</span>
          </div>

          <div className="auth-left-content">

            <span className="auth-tag">
              JOIN MOVIEHUB
            </span>

            <h1>
              Your next
              <br />
              movie adventure
              <br />
              starts here.
            </h1>

            <p>
              Create your account and get access
              to amazing movies and an easy ticket
              booking experience.
            </p>

            <div className="auth-features">

              <div>
                <span>🍿</span>
                <p>Enjoy Movies</p>
              </div>

              <div>
                <span>🎟️</span>
                <p>Book Tickets</p>
              </div>

              <div>
                <span>⭐</span>
                <p>Save Favorites</p>
              </div>

            </div>

          </div>

        </div>

        <div className="auth-right">

          <div className="auth-card signup-card">

            <div className="auth-icon">
              🚀
            </div>

            <h2>Create Account</h2>

            <p className="auth-subtitle">
              Join MovieHub today
            </p>

            <form onSubmit={handleSignup}>

              <div className="input-group">

                <label>Full Name</label>

                <div className="input-box">

                  <span>👤</span>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />

                </div>

              </div>

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

                <label>Password</label>

                <div className="input-box">

                  <span>🔒</span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
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

              <div className="input-group">

                <label>
                  Confirm Password
                </label>

                <div className="input-box">

                  <span>🔐</span>

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword
                      ? "🙈"
                      : "👁️"}
                  </button>

                </div>

              </div>

              <button
                type="submit"
                className="auth-submit"
              >
                Create Account
                <span>→</span>
              </button>

            </form>

            <p className="account-text">
              Already have an account?
              <Link to="/login">
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;