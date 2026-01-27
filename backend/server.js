import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Booking API
app.post("/api/bookings/create", (req, res) => {
    console.log("Request body:", req.body); // << ADD THIS
  const { fullName, email, phone, date, time } = req.body;

  const sql = `
    INSERT INTO bookings 
    (full_name, email, phone, booking_date, booking_time)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [fullName, email, phone, date, time], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Booking failed" });
    }

    res.status(201).json({ message: "Booking successful!" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
