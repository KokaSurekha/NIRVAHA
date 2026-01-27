
import axios, { AxiosResponse } from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/bookings",
});

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

export const createBooking = (data: BookingFormData): Promise<AxiosResponse<{ message: string }>> => {
  return API.post("/create", data);
};
