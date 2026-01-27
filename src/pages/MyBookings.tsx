import { useState, ChangeEvent, FormEvent } from "react";
import { createBooking, BookingFormData } from "../api/bookingApi";

function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await createBooking(formData);
      alert(res.data.message);
      setFormData({ fullName: "", email: "", phone: "", service: "", date: "", time: "" });
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* Service is now optional */}
      
      {/* Time input with clock picker */}
      <input
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingPage;
