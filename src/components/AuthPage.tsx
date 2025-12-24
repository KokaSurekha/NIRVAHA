import { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

import wellness1 from "../wellness1.jpeg";
import wellness2 from "../wellness2.jpeg";
import wellness3 from "../wellness3.jpeg";
import wellness4 from "../wellness4.jpeg";
import wellness5 from "../wellness5.jpeg";
import wellness6 from "../wellness6.jpeg";
import wellness7 from "../wellness7.jpeg";
import wellness8 from "../wellness8.avif";
import wellness9 from "../wellness9.webp";
import wellness10 from "../wellness10.avif";
import wellness11 from "../wellness11.jpeg";
import wellness12 from "../wellness12.jpeg";
import wellness13 from "../wellness13.jpeg";
import wellness14 from "../wellness14.jpeg";
import wellness15 from "../wellness15.jpeg";
import wellness16 from "../wellness16.jpeg";
import wellness17 from "../wellness17.jpeg";
import wellness18 from "../wellness18.jpeg";
import wellness19 from "../wellness19.jpeg";
import wellness20 from "../wellness20.jpeg";
import wellness21 from "../wellness21.jpeg";
import wellness22 from "../wellness22.jpeg";
import wellness23 from "../wellness23.jpeg";
import wellness24 from "../wellness24.jpeg";
import wellness25 from "../wellness25.jpeg";
import signup from "../signupimage.jpeg";

const images = [
  wellness1, wellness2, wellness3, wellness4, wellness5,
  wellness6, wellness7, wellness8, wellness9, wellness10,
  wellness11, wellness12, wellness13, wellness14, wellness15,
  wellness16, wellness17, wellness18, wellness19, wellness20,
  wellness21, wellness22, wellness23, wellness24, wellness25
];

type UserRole = 'user' | 'hr' | 'doctor' | 'admin';

interface AuthPageProps {
  initialMode?: 'login' | 'signup';
  onClose: () => void;
}

export default function AuthPage({
  initialMode = 'signup',
  onClose
}: AuthPageProps) {

  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('user');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">

      {/* ================= LOGIN GRID BACKGROUND ================= */}
      {mode === 'login' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 w-full h-full p-2">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border-2 border-white/60"
                style={{
                  animation: "gridSlide 10s linear infinite",
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  style={{ animation: "gridZoom 6s linear infinite" }}
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <style>{`
            @keyframes gridSlide {
              0% { transform: translateX(-20px); }
              100% { transform: translateX(20px); }
            }
            @keyframes gridZoom {
              0% { transform: scale(1); }
              50% { transform: scale(1.08); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
      )}

      {/* ================= CLOSE BUTTON ================= */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
      >
        <X className="text-black" />
      </button>

      {/* ================= LOGIN ================= */}
      {mode === 'login' && (
        <div className="relative z-10 w-full max-w-md bg-white/25 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
          <h2 className="text-4xl font-bold text-center mb-3">Welcome Back</h2>
          <p className="text-center text-slate-600 mb-6">
            Sign in to continue your journey
          </p>

          <div className="flex gap-2 mb-6 bg-teal-50 p-1 rounded-2xl">
            {['user', 'hr', 'doctor', 'admin'].map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role as UserRole)}
                className={`flex-1 py-2 rounded-xl ${
                  selectedRole === role
                    ? "bg-gradient-to-r from-teal-600 to-green-600 text-white"
                    : "text-slate-600"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <form className="space-y-5">
            <div>
              <label>Email</label>
              <input className="w-full p-3 rounded-xl border" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" className="w-full p-3 rounded-xl border" />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-xl">
              Login
            </button>

            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <button onClick={() => setMode('signup')} className="text-teal-600">
                Signup
              </button>
            </p>
          </form>
        </div>
      )}

      {/* ================= SIGNUP ================= */}
      {mode === 'signup' && (
        <div className="w-full h-full flex">

          {/* LEFT IMAGE */}
          <div className="hidden md:block w-1/2 h-full relative">
            <img
              src={signup}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-transparent">
  {/* ===== SIGNUP CONTAINER ===== */}
  <div className="relative z-10 w-full max-w-2xl bg-white/25 backdrop-blur-lg
    rounded-3xl border border-white/30 p-10 shadow-2xl animate-scaleIn text-black">

    {/* Heading */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-black mb-2">
        Create Account
      </h2>
      <p className="text-lg text-emerald-600/100">
        Join us and begin your spiritual wellness journey
      </p>
    </div>

    <form className="space-y-5">

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
          <input
            type="text"
            placeholder="John Doe"
            className="w-full pl-12 pr-4 py-3.5 pt-0 bg-white
              border border-slate-200 rounded-2xl
              focus:outline-none focus:border-teal-500
              focus:ring-2 focus:ring-teal-500/20
              text-black placeholder:text-sm placeholder:text-slate-500 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full pl-12 pr-4 py-3.5 bg-white
              border border-slate-200 rounded-2xl
              focus:outline-none focus:border-teal-500
              focus:ring-2 focus:ring-teal-500/20
              text-black placeholder:text-sm placeholder:text-slate-500 transition-all"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password (min. 8 characters)"
            className="w-full pl-12 pr-12 py-3.5 bg-white
              border border-slate-200 rounded-2xl
              focus:outline-none focus:border-teal-500
              focus:ring-2 focus:ring-teal-500/20
              text-black placeholder:text-sm placeholder:text-slate-500 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className="w-full pl-12 pr-12 py-3.5 bg-white
              border border-slate-200 rounded-2xl
              focus:outline-none focus:border-teal-500
              focus:ring-2 focus:ring-teal-500/20
              text-black placeholder:text-sm placeholder:text-slate-500 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60"
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3">
        <input type="checkbox" className="mt-1 accent-teal-600" />
        <p className="text-sm text-black/80">
          I agree to the Terms of Service and Privacy Policy
        </p>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-teal-600 to-green-600
          rounded-2xl font-semibold text-lg text-white
          hover:shadow-2xl hover:shadow-teal-500/30 transition-all
          flex items-center justify-center gap-2"
      >
        Create Account
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Login */}
      <p className="text-center text-sm text-black/80 mt-1">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setMode("login")}
          className="text-teal-600 font-medium hover:underline"
        >
          Login here
        </button>
      </p>

    </form>
  </div>



          </div>
        </div>
      )}
    </div>
  );
}
