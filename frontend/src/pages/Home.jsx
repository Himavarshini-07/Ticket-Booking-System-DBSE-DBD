import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            YOUR CINEMA EXPERIENCE
          </span>

          <h1>
            Movies are
            <br />
            <span>better together.</span>
          </h1>

          <p>
            Discover the latest movies, choose your favorite
            seats and book your tickets in just a few clicks.
          </p>

          <div className="hero-buttons">

            <Link
              to="/movies"
              className="primary-btn"
            >
              🎬 Explore Movies →
            </Link>

            <Link
              to="/signup"
              className="secondary-btn"
            >
              Create Account
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>500+</strong>
              <span>Movies</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Theatres</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Happy Users</span>
            </div>

          </div>

        </div>


        {/* ================= MOVIE TICKET ================= */}

        <div className="hero-visual">

          <div className="ticket-card">

            <div className="ticket-top">
              <span>MOVIEHUB</span>
              <span>ADMIT ONE</span>
            </div>

            <div className="ticket-movie">

              <div className="ticket-circle">
                🎬
              </div>

              <div>
                <h3>Movie Night</h3>
                <p>Premium Cinema Experience</p>
              </div>

            </div>

            <div className="ticket-info">

              <div>
                <small>MOVIE</small>
                <b>Blockbuster</b>
              </div>

              <div>
                <small>DATE</small>
                <b>12 SEP</b>
              </div>

              <div>
                <small>TIME</small>
                <b>7:30 PM</b>
              </div>

              <div>
                <small>SEAT</small>
                <b>A12</b>
              </div>

            </div>

            <div className="ticket-line"></div>

            <div className="ticket-barcode">
              || ||| || |||| |||
            </div>

          </div>

        </div>

      </section>


      {/* ================= MOVIES SECTION ================= */}

      <section className="movies-section">

        <div className="section-header">

          <div>
            <span className="section-tag">
              NOW SHOWING
            </span>

            <h2>
              Popular <span>Movies</span>
            </h2>
          </div>

          <Link
            to="/movies"
            className="view-all"
          >
            View All Movies →
          </Link>

        </div>


        <div className="movie-grid">

          <div className="movie-card">

            <div className="movie-poster-wrapper">
              <div className="movie-poster movie-poster-one">
                🎬
              </div>

              <div className="movie-rating">
                ⭐ 8.8
              </div>
            </div>

            <div className="movie-info">

              <h3>Action Night</h3>

              <p className="movie-genre">
                Action • Thriller
              </p>

              <div className="movie-details">
                <span>⏱ 2h 15m</span>
                <span>2026</span>
              </div>

              <Link
                to="/movies"
                className="book-btn"
              >
                Book Tickets
              </Link>

            </div>

          </div>


          <div className="movie-card">

            <div className="movie-poster-wrapper">
              <div className="movie-poster movie-poster-two">
                🚀
              </div>

              <div className="movie-rating">
                ⭐ 9.1
              </div>
            </div>

            <div className="movie-info">

              <h3>Galaxy Wars</h3>

              <p className="movie-genre">
                Sci-Fi • Adventure
              </p>

              <div className="movie-details">
                <span>⏱ 2h 30m</span>
                <span>2026</span>
              </div>

              <Link
                to="/movies"
                className="book-btn"
              >
                Book Tickets
              </Link>

            </div>

          </div>


          <div className="movie-card">

            <div className="movie-poster-wrapper">
              <div className="movie-poster movie-poster-three">
                ❤️
              </div>

              <div className="movie-rating">
                ⭐ 8.6
              </div>
            </div>

            <div className="movie-info">

              <h3>Love Story</h3>

              <p className="movie-genre">
                Romance • Drama
              </p>

              <div className="movie-details">
                <span>⏱ 2h 05m</span>
                <span>2026</span>
              </div>

              <Link
                to="/movies"
                className="book-btn"
              >
                Book Tickets
              </Link>

            </div>

          </div>


          <div className="movie-card">

            <div className="movie-poster-wrapper">
              <div className="movie-poster movie-poster-four">
                👻
              </div>

              <div className="movie-rating">
                ⭐ 8.4
              </div>
            </div>

            <div className="movie-info">

              <h3>The Haunted</h3>

              <p className="movie-genre">
                Horror • Mystery
              </p>

              <div className="movie-details">
                <span>⏱ 1h 55m</span>
                <span>2026</span>
              </div>

              <Link
                to="/movies"
                className="book-btn"
              >
                Book Tickets
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY MOVIEHUB ================= */}

      <section className="why-section">

        <div className="section-header center">

          <span className="section-tag">
            WHY MOVIEHUB
          </span>

          <h2>
            Everything you need for the
            <br />
            <span>perfect movie night.</span>
          </h2>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div>🎬</div>

            <h3>Latest Movies</h3>

            <p>
              Discover the latest blockbusters,
              upcoming releases and trending movies.
            </p>

          </div>


          <div className="feature-card">

            <div>💺</div>

            <h3>Best Seats</h3>

            <p>
              Select your favorite seats with our
              simple and interactive seat layout.
            </p>

          </div>


          <div className="feature-card">

            <div>🎟️</div>

            <h3>Easy Booking</h3>

            <p>
              Book your movie tickets quickly
              with just a few simple steps.
            </p>

          </div>


          <div className="feature-card">

            <div>🔒</div>

            <h3>Secure Experience</h3>

            <p>
              Your booking information is organized
              safely in your MovieHub account.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div>

          <span className="section-tag">
            READY FOR YOUR NEXT MOVIE?
          </span>

          <h2>
            Grab your tickets.
            <br />
            <span>Enjoy the show.</span>
          </h2>

          <p>
            Your next unforgettable cinema experience
            is just one click away.
          </p>

          <Link
            to="/movies"
            className="primary-btn"
          >
            Browse Movies 🎬
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h3>
          🎬 Movie<span>Hub</span>
        </h3>

        <p>
          Your ultimate movie ticket booking experience.
        </p>

        <small>
          © 2026 MovieHub. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default Home;