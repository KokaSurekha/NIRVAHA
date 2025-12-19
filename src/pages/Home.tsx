import { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Users, 
  Music, 
  Palette, 
  Brain,
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe,
  TrendingUp,
  Star,
  LogIn,
  UserPlus,
  X
} from 'lucide-react';
import AuthPage from '@/components/AuthPage';
import logo from '@/logo.png';
import { AiOutlineMenu, AiOutlineClose,AiOutlineAppstore,AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";

type ModalView = 'choice' | 'auth' | null;
type AuthMode = 'login' | 'signup';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [modalView, setModalView] = useState<ModalView>(null);
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setModalView('choice');
  const closeModal = () => setModalView(null);
  
  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setModalView('auth');
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Auth Page */}
      {modalView === 'auth' && (
        <AuthPage initialMode={authMode} onClose={closeModal} />
      )}

      {/* Choice Modal */}
      {modalView === 'choice' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-lg"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-gradient-to-br from-slate-900/95 to-emerald-900/95 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Begin Your Journey
                </h2>
                <p className="text-xl text-gray-300">
                  Choose how you'd like to continue
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Login Card */}
                {/* Login Card */}
<button
  onClick={() => openAuth('login')}
  className="group relative p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-105 text-left overflow-hidden"
>
  {/* Floating Background Orbs */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-float" />
  <div
    className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl animate-float"
    style={{ animationDelay: "3s" }}
  />

  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-3xl transition-all" />

  <div className="relative z-10 flex flex-col items-center text-center">
    {/* Icon */}
    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-green-500/40 transition-all">
      <LogIn className="w-10 h-10 text-white" />
    </div>

    {/* Text */}
    <h3 className="text-3xl font-bold mb-3">Login</h3>
    <p className="text-gray-300 text-lg mb-8">
      Welcome back! Continue your wellness journey where you left off.
    </p>

    {/* CTA */}
    <div className="flex items-center gap-2 text-green-300 font-semibold text-lg">
      Access your account
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
</button>


                {/* Sign Up Card */}
                <button
                  onClick={() => openAuth('signup')}
                  className="group relative p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-105 text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-3xl transition-all" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all">
                      <UserPlus className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3">Sign Up</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      New here? Start your journey to harmony and inner peace today.
                    </p>
                    
                    <div className="flex items-center gap-2 text-emerald-300 font-medium">
                      Create your account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
     <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className='w-36 h-10'/>
          </div>

          {/* Desktop Menu (lg+) */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button 
              onClick={openModal}
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Tablet Menu (md only) - icons only */}
          <div className="hidden md:flex lg:hidden items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white text-2xl"><AiOutlineAppstore /></a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white text-2xl"><AiOutlineQuestionCircle /></a>
            <a href="#contact" className="text-gray-300 hover:text-white text-2xl"><AiOutlineMail /></a>
            
          </div>

          {/* Mobile Hamburger */}
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <AiOutlineClose className="w-8 h-8 text-white" />
              ) : (
                <AiOutlineMenu className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10">
            <a href="#features" className="block px-6 py-4 text-gray-300 hover:text-white">Features</a>
            <a href="#how-it-works" className="block px-6 py-4 text-gray-300 hover:text-white">How It Works</a>
            <a href="#contact" className="block px-6 py-4 text-gray-300 hover:text-white">Contact</a>
            <button 
              onClick={openModal}
              className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="mt-12 relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'url(https://019b210f-ae14-72b2-bf42-7e874042f3e1.mochausercontent.com/hero-meditation-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-emerald-950/40 to-slate-950" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
         
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Harmony of Mind through
            <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
             AI-Guided Spiritual Healing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the harmony of ancient mindfulness and modern AI. Nirvaha empowers your mental wellness journey — balancing mind, body, and soul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={openModal}
              className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/40 transition-all flex items-center gap-2"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>

          {/* Floating Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Healing Sessions', value: '200K+' },
              { label: 'Community Members', value: '15K+' },
              { label: 'Success Rate', value: '94%' }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Mental Wellness Crisis
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Indian youth face unprecedented mental health challenges in today's fast-paced world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '72%', text: 'of young Indians experience anxiety or depression' },
              { stat: '85%', text: 'avoid seeking help due to stigma' },
              { stat: '90%', text: 'lack access to culturally aligned therapy' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl border border-red-500/20 hover:border-red-500/40 transition-all">
                <div className="text-5xl font-bold text-red-400 mb-4">{item.stat}</div>
                <p className="text-gray-300 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Nirvaha Solution */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
              <span className="text-green-300 font-medium">The Nirvaha Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Ancient Wisdom Meets
              <span className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Modern AI Technology
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI Spiritual Companion',
                description: 'Meet SAGE - your personalized AI guide rooted in ancient wisdom',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Anonymous Community',
                description: 'Connect with others on similar healing journeys in a safe space',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Music,
                title: 'Creative Healing',
                description: 'Express yourself through sound, art, and mindful creation',
                color: 'from-teal-500 to-cyan-500'
              },
              {
                icon: Sparkles,
                title: 'Personalized Rituals',
                description: 'Daily practices tailored to your emotional and spiritual needs',
                color: 'from-cyan-500 to-lime-500'
              }
            ].map((solution, i) => (
              <div key={i} className="group p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-all`}>
                  <solution.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Experience */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated Meditation Background */}
            <div className="absolute inset-0">
              {/* Base Image with Breathing Animation */}
              <div 
                className="absolute inset-0 bg-cover bg-center animate-breathing"
                style={{
                  backgroundImage: 'url(https://019b210f-ae14-72b2-bf42-7e874042f3e1.mochausercontent.com/animated-meditation-woman.png)',
                  animation: 'breathing 8s ease-in-out infinite'
                }}
              />
              
              {/* Mandala Glow Overlay */}
              <div className="absolute inset-0 opacity-30 animate-mandala-glow" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                  animation: 'mandalaGlow 6s ease-in-out infinite'
                }}
              />
              
              {/* Energy Wave Overlay */}
              <div className="absolute inset-0 animate-energy-wave"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.4) 50%, transparent 100%)',
                  animation: 'energyWave 4s linear infinite'
                }}
              />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-300/60 rounded-full animate-float-particle"
                    style={{
                      left: `${(i * 12) + 10}%`,
                      top: `${(i * 8) + 20}%`,
                      animation: `floatParticle ${5 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Aura Lines */}
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 0.6 }} />
                      <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#auraGradient)" strokeWidth="2" opacity="0.5">
                    <animate attributeName="r" values="30%;35%;30%" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50%" cy="50%" r="40%" fill="none" stroke="url(#auraGradient)" strokeWidth="1.5" opacity="0.4">
                    <animate attributeName="r" values="40%;45%;40%" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="8s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-emerald-950/70 to-slate-950/90" />
            
            <style>{`
              @keyframes breathing {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
              }
              
              @keyframes mandalaGlow {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 0.4; }
              }
              
              @keyframes energyWave {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              
              @keyframes floatParticle {
                0%, 100% { 
                  transform: translateY(0) translateX(0);
                  opacity: 0.3;
                }
                25% {
                  transform: translateY(-20px) translateX(10px);
                  opacity: 0.8;
                }
                50% {
                  transform: translateY(-10px) translateX(-5px);
                  opacity: 0.5;
                }
                75% {
                  transform: translateY(-30px) translateX(15px);
                  opacity: 0.9;
                }
              }
            `}</style>
            
            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-green-400/30 rounded-lg rotate-45 animate-float-slow" />
              <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-float-medium" />
              <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-teal-400/30 rounded-lg animate-float-fast" />
              <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-green-500/20 rounded-full blur-xl animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-emerald-400/20 rounded-full animate-float-slow" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-24 md:py-32">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-8">
                  <Music className="w-4 h-4 text-green-300" />
                  <span className="text-sm text-green-200">Guided Meditation Experience</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Journey to Your
                  <span className="block bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                    Inner Peace
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Immerse yourself in a serene meditation experience with soft ambient tones and calming narration. 
                  Visualize flowing waves of light in tranquil pastel colors as you journey through cosmic landscapes 
                  and zen gardens. Focus on relaxation, mental clarity, and emotional release.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-green-500/40 transition-all flex items-center justify-center gap-2">
                    <Music className="w-5 h-5" />
                    Start Meditation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all">
                    Explore Sessions
                  </button>
                </div>
                
                {/* Features List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Brain, text: 'Mindfulness & Breath Work' },
                    { icon: Heart, text: 'Emotional Release & Healing' },
                    { icon: Sparkles, text: 'Mental Clarity & Focus' },
                    { icon: Music, text: 'Calming Ambient Sounds' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-green-200" />
                      </div>
                      <span className="text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Your Wellness Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to achieve mental and spiritual harmony
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Emotional Intelligence',
                description: 'Advanced AI that understands your emotions and provides empathetic guidance',
                features: ['Real-time emotion detection', '24/7 availability', 'Personalized responses']
              },
              {
                icon: Heart,
                title: 'Spiritual & Cultural Depth',
                description: 'Grounded in ancient Indian philosophy, Vedic wisdom, and mindfulness practices',
                features: ['Vedic teachings', 'Meditation guides', 'Sanskrit mantras']
              },
              {
                icon: Sparkles,
                title: 'Personalized Guidance',
                description: 'Your journey is unique. Get recommendations tailored to your specific needs',
                features: ['Custom rituals', 'Adaptive learning', 'Progress tracking']
              },
              {
                icon: Palette,
                title: 'Creative Healing Tools',
                description: 'Express and heal through music, art, journaling, and mindful silence',
                features: ['Art therapy', 'Sound healing', 'Guided journaling']
              },
              {
                icon: Users,
                title: 'Community & Mentorship',
                description: 'Connect with peers and mentors who understand your journey',
                features: ['Anonymous sharing', 'Group sessions', 'Mentor matching']
              },
              {
                icon: Globe,
                title: 'Culturally Relevant',
                description: 'Designed specifically for Indian users with cultural sensitivity and awareness',
                features: ['Hindi support', 'Regional practices', 'Cultural context']
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-xl group-hover:shadow-green-500/30 transition-all">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Journey to Harmony
            </h2>
            <p className="text-xl text-gray-400">
              Four simple steps to begin your transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Share Emotions', description: 'Express your feelings openly and honestly with SAGE AI' },
              { step: '02', title: 'Get AI Insights', description: 'Receive personalized guidance based on ancient wisdom' },
              { step: '03', title: 'Practice Rituals', description: 'Follow daily mindfulness and healing practices' },
              { step: '04', title: 'Find Community', description: 'Connect with others and grow together' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-green-500/30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Supporting You at Every Stage
            </h2>
            <p className="text-xl text-gray-400">
              From students to professionals, we're here for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Students & Exam Stress',
                description: 'Manage academic pressure, exam anxiety, and performance stress with mindful techniques',
                image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80'
              },
              {
                title: 'Corporate Wellness',
                description: 'Balance work-life demands, reduce burnout, and find peace in your professional journey',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
              },
              {
                title: 'Pregnancy & Maternal Care',
                description: 'Support for expectant mothers through emotional and spiritual guidance',
                image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80'
              },
              {
                title: 'Self-Discovery & Balance',
                description: 'Find your true self, establish emotional equilibrium, and achieve inner peace',
                image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80'
              }
            ].map((useCase, i) => (
              <div key={i} className="group relative h-80 rounded-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${useCase.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Market & Trust */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted & Research-Backed
            </h2>
            <p className="text-xl text-gray-400">
              Building on proven methodologies and growing recognition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: 'Privacy First',
                stat: '100% Anonymous',
                description: 'Your data is encrypted and never shared'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                stat: '94% Success Rate',
                description: 'Based on user-reported improvements'
              },
              {
                icon: Star,
                title: 'Award Winning',
                stat: '15+ Recognition',
                description: 'Industry awards and certifications'
              }
            ].map((trust, i) => (
              <div key={i} className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <trust.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-2">
                  {trust.stat}
                </div>
                <h3 className="text-xl font-semibold mb-3">{trust.title}</h3>
                <p className="text-gray-400">{trust.description}</p>
              </div>
            ))}
          </div>

          {/* Research-backed callout */}
          <div className="p-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-3xl border border-green-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Research-Backed Approach</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our methods are grounded in evidence-based practices combining cognitive behavioral therapy, 
              mindfulness-based stress reduction, and ancient Vedic wisdom, validated through ongoing research partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Vision & Roadmap
            </h2>
            <p className="text-xl text-gray-400">
              Building the future of spiritual wellness technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: 'Foundation',
                status: 'Current',
                items: ['SAGE AI Launch', 'Core Features', 'Community Building', 'Mobile App Beta']
              },
              {
                phase: 'Growth',
                status: '2025',
                items: ['AI Enhancement', 'Voice Integration', 'Regional Languages', 'Enterprise Solutions']
              },
              {
                phase: 'Global Expansion',
                status: '2026+',
                items: ['International Markets', 'Research Partnerships', 'Healthcare Integration', 'Platform Ecosystem']
              }
            ].map((phase, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{phase.phase}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
    <section id="contact" className="p-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl border border-white/10">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mt-6 text-4xl font-bold text-emerald-400 w=20">
          Start Your Healing <span className="text-emerald-400">Journey</span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Ready to transform your mental wellness? Get in touch with our team or start your personalized journey today.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Get Started Today</h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Full Name *" />
              <input className="input" placeholder="Email Address *" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Phone Number" />
              <select className="input">
                <option>I'm Interested In *</option>
                <option>Therapy</option>
                <option>Consultation</option>
                <option>Wellness Program</option>
              </select>
            </div>
            <textarea
              className="input h-28"
              placeholder="Tell us about your goals"
            />

            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-medium">
              Begin My Journey
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Multiple Ways to Connect</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-semibold">Emergency Support</h3>
            <p className="text-gray-700">7780754541</p>
            <span className="text-red-500 text-sm">Available 24/7 for crisis situations</span>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-semibold">General Inquiries</h3>
            <p className="text-gray-700">nirvaha6@gmail.com</p>
            <span className="text-sm text-gray-600">Response within 4 hours</span>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
            <h3 className="font-semibold">Global Headquarters</h3>
            <p className="text-gray-700">Hyderabad, India</p>
            <span className="text-sm text-gray-600">Serving 2+ countries worldwide</span>
          </div>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Nirvaha</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2024 Nirvaha. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
