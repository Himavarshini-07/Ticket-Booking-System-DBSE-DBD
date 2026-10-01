import { Link } from "react-router-dom";

function MyBookings() {
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const allBookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  const bookings = user
    ? allBookings.filter(
        (booking) =>
          booking.user === user.email
      )
    : [];

  if (!user) {
    return (
      <div className="empty-bookings">

        <div className="empty-icon">
          🔐
        </div>

        <h1>Login Required</h1>

        <p>
          Please login to view your bookings.
        </p>

        <Link
          to="/login"
          className="primary-btn"
        >
          Login Now →
        </Link>

      </div>
    );
  }

  return (
    <div className="bookings-page">

      <div className="bookings-header">

        <span className="section-tag">
          YOUR TICKETS
        </span>

        <h1>
          My <span>Bookings</span>
        </h1>

        <p>
          View all your movie tickets here.
        </p>

      </div>

      {bookings.length === 0 ? (
        <div className="empty-bookings">

          <div className="empty-icon">
            🎟️
          </div>

          <h2>
            No bookings yet
          </h2>

          <p>
            Your booked movie tickets
            will appear here.
          </p>

          <Link
            to="/movies"
            className="primary-btn"
          >
            Browse Movies →
          </Link>

        </div>
      ) : (
        <div className="bookings-list">

          {bookings
            .slice()
            .reverse()
            .map((booking) => (
              <div
                className="booking-card"
                key={booking.id}
              >

                <div className="booking-icon">
                  🎬
                </div>

                <div className="booking-main">

                  <span className="confirmed">
                    ✓ CONFIRMED
                  </span>

                  <h2>
                    {booking.movie}
                  </h2>

                  <p>
                    {booking.language}
                  </p>

                  <div className="booking-details">

                    <div>
                      <small>DATE</small>
                      <strong>
                        {booking.date}
                      </strong>
                    </div>

                    <div>
                      <small>TIME</small>
                      <strong>
                        {booking.time}
                      </strong>
                    </div>

                    <div>
                      <small>SEATS</small>
                      <strong>
                        {booking.seats.join(", ")}
                      </strong>
                    </div>

                    <div>
                      <small>TOTAL</small>
                      <strong>
                        ₹{booking.total}
                      </strong>
                    </div>

                  </div>

                </div>

                <div className="booking-ticket">
                  <div className="barcode">
                    || ||| | |||| ||
                  </div>

                  <small>
                    #{booking.id}
                  </small>
                </div>

              </div>
            ))}

        </div>
      )}

    </div>
  );
}

export default MyBookings;