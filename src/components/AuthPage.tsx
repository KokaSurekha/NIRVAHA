import { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface AuthPageProps {
  initialMode?: 'login' | 'signup';
  onClose: () => void;
}

type UserRole = 'user' | 'hr' | 'doctor' | 'admin';

export default function AuthPage({ initialMode = 'signup', onClose }: AuthPageProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('user');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fadeIn">
      {mode === 'login' ? (
        /* Login Page with Mosaic Background */
        <>
          {/* Meditation Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://019b210f-ae14-72b2-bf42-7e874042f3e1.mochausercontent.com/sunset-meditation-lake.png)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-teal-50/60" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Center Glassmorphism Card */}
          <div className="relative z-10 w-full max-w-md mx-4 animate-scaleIn">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-3">Welcome Back</h2>
                <p className="text-slate-600 text-lg">
                  Sign in to continue your spiritual wellness journey
                </p>
              </div>

              {/* Role Selector Tabs */}
              <div className="flex gap-2 mb-8 p-1 bg-teal-50 rounded-2xl">
                {[
                  { id: 'user' as UserRole, label: 'User' },
                  { id: 'hr' as UserRole, label: 'HR' },
                  { id: 'doctor' as UserRole, label: 'Doctor' },
                  { id: 'admin' as UserRole, label: 'Admin' }
                ].map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all ${
                      selectedRole === role.id
                        ? 'bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-lg'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-slate-900 placeholder-slate-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl font-semibold text-lg text-white hover:shadow-2xl hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Guest Option */}
                <button
                  type="button"
                  className="w-full py-3 bg-white border border-slate-200 rounded-2xl font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
                >
                  Continue as Guest (dev)
                </button>

                {/* Footer */}
                <p className="text-center text-slate-600 text-sm pt-2">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    Sign up here
                  </button>
                </p>
              </form>
            </div>
          </div>
        </>
      ) : (
        /* Signup Page - Original Split Screen Design */
        <>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Split Screen Container */}
          <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Left Section - Meditation Artwork */}
            <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://019b210f-ae14-72b2-bf42-7e874042f3e1.mochausercontent.com/meditation-signup-art.png)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-transparent to-slate-950/60" />
              
              {/* Floating Particles Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-300/40 rounded-full animate-float-slow blur-sm" />
                <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-green-300/30 rounded-full animate-float-medium blur-sm" />
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-300/40 rounded-full animate-float-fast blur-sm" />
                <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-teal-400/20 rounded-full animate-pulse-glow blur-md" />
              </div>

              {/* Overlay Text */}
              <div className="relative z-10 p-12 flex flex-col justify-end">
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                  Begin Your Journey to
                  <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                    Inner Harmony
                  </span>
                </h2>
                <p className="text-xl text-gray-200 max-w-md">
                  Join thousands discovering peace, mindfulness, and spiritual wellness through AI-guided meditation
                </p>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8 overflow-y-auto">
              <div className="w-full max-w-md">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-3">Create Account</h2>
                    <p className="text-gray-400 text-lg">
                      Sign up to begin your spiritual wellness journey
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          className="w-full pl-12 pr-12 py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-white placeholder-gray-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Re-enter your password"
                          className="w-full pl-12 pr-12 py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-white placeholder-gray-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="terms"
                        className="w-4 h-4 mt-1 rounded border-slate-600 bg-slate-800 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-900"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-400 leading-relaxed">
                        I agree to the Terms of Service and Privacy Policy
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full py-4 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl font-semibold text-lg text-white hover:shadow-2xl hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      Create Account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Switch to Login */}
                    <p className="text-center text-gray-400 text-sm">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setMode('login')}
                        className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                      >
                        Login here
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
