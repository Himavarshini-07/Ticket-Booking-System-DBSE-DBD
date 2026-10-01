import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seat from "../components/Seat";

const movieData = {
  1: {
    title: "Pushpa 2",
    language: "Telugu",
    price: 250
  },
  2: {
    title: "Kalki 2898 AD",
    language: "Telugu",
    price: 300
  },
  3: {
    title: "RRR",
    language: "Telugu",
    price: 250
  },
  4: {
    title: "Devara",
    language: "Telugu",
    price: 280
  },
  5: {
    title: "Salaar",
    language: "Telugu",
    price: 250
  },
  6: {
    title: "Jersey",
    language: "Telugu",
    price: 220
  }
};

const bookedSeats = [
  "A3",
  "A4",
  "B5",
  "C2",
  "D6",
  "E4",
  "F7",
  "G3"
];

function SeatBooking() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const movie =
    movieData[movieId] || movieData[1];

  const [selectedSeats, setSelectedSeats] =
    useState([]);

  const rows = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
  ];

  const seatsPerRow = 8;

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(
          (item) => item !== seat
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat
      ]);
    }
  };

  const total =
    selectedSeats.length * movie.price;

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert(
        "Please select at least one seat."
      );
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if (!user) {
      alert(
        "Please login before booking tickets."
      );
      navigate("/login");
      return;
    }

    const booking = {
      id: Date.now(),
      movie: movie.title,
      language: movie.language,
      seats: selectedSeats,
      quantity: selectedSeats.length,
      total,
      date: new Date().toLocaleDateString(),
      time: "7:30 PM",
      user: user.email
    };

    const existingBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    localStorage.setItem(
      "pendingBooking",
      JSON.stringify(booking)
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...existingBookings,
        booking
      ])
    );

    navigate("/bookings");
  };

  return (
    <div className="booking-page">

      <div className="booking-header">

        <span className="section-tag">
          SELECT YOUR SEATS
        </span>

        <h1>
          {movie.title}
        </h1>

        <p>
          {movie.language} • ₹{movie.price}
          per seat
        </p>

      </div>

      <div className="screen">
        <div className="screen-light"></div>
        SCREEN
      </div>

      <div className="seat-layout">

        {rows.map((row) => (
          <div
            className="seat-row"
            key={row}
          >

            <span className="row-label">
              {row}
            </span>

            {Array.from(
              { length: seatsPerRow },
              (_, index) => {
                const seat =
                  `${row}${index + 1}`;

                return (
                  <Seat
                    key={seat}
                    seat={seat}
                    selected={selectedSeats.includes(
                      seat
                    )}
                    booked={bookedSeats.includes(
                      seat
                    )}
                    onClick={
                      handleSeatClick
                    }
                  />
                );
              }
            )}

          </div>
        ))}

      </div>

      <div className="seat-legend">

        <div>
          <span className="legend-seat"></span>
          Available
        </div>

        <div>
          <span className="legend-seat selected"></span>
          Selected
        </div>

        <div>
          <span className="legend-seat booked"></span>
          Booked
        </div>

      </div>

      <div className="booking-summary">

        <div>
          <span>Selected Seats</span>
          <strong>
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "None"}
          </strong>
        </div>

        <div>
          <span>Price / Seat</span>
          <strong>
            ₹{movie.price}
          </strong>
        </div>

        <div>
          <span>Total</span>
          <strong className="total-price">
            ₹{total}
          </strong>
        </div>

        <button
          className="proceed-btn"
          onClick={handleProceed}
        >
          Proceed to Booking →
        </button>

      </div>

    </div>
  );
}

export default SeatBooking;