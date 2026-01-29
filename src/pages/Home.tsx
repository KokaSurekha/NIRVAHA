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
  Star
} from 'lucide-react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineAppstore, AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import logo from '@/logo.png';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");


  const navigate = useNavigate();

  const sendMessage = () => {
  if (!input.trim()) return;

  const userMessage = { sender: "user" as const, text: input };
  const botMessage = {
    sender: "bot" as const,
    text: "Hi! I am Nirvaha Assistant 👋 How can I help you?",
  };

  setMessages((prev) => [...prev, userMessage, botMessage]);
  setInput("");
};


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  // Redirect to booking page
 
  const goToAuth = () => {
  navigate('/auth');
};

  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className='w-40 h-12'/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
           
<a
  href="#meditation"
  className="relative px-3 py-2 text-[15px] font-medium tracking-wide text-gray-300 transition-all duration-300 
             hover:text-white
             after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 
             after:bg-gradient-to-r after:from-emerald-400 after:to-teal-400 
             after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-full"
  onClick={() => setMobileMenuOpen(false)}
>
  Meditation
</a>

            <a
  href="#chatbot"
  className="px-4 py-2 text-sm font-medium rounded-full 
             text-emerald-300 bg-emerald-500/10 
             hover:bg-emerald-500/20 hover:text-white 
             transition-all shadow-sm shadow-emerald-500/20"
  onClick={(e) => { e.preventDefault(); setShowChatbot(true); }}
>
  Chatbot
</a>
            <a href="#features" className="relative px-3 py-2 text-[15px] font-medium tracking-wide text-gray-300 transition-all duration-300 
             hover:text-white
             after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 
             after:bg-gradient-to-r after:from-emerald-400 after:to-teal-400 
             after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-full" >Features</a>
            <a href="#how-it-works" className="relative px-3 py-2 text-[15px] font-medium tracking-wide text-gray-300 transition-all duration-300 
             hover:text-white
             after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 
             after:bg-gradient-to-r after:from-emerald-400 after:to-teal-400 
             after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-full">How It Works</a>
            <a href="#contact" className="relative px-3 py-2 text-[15px] font-medium tracking-wide text-gray-300 transition-all duration-300 
             hover:text-white
             after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 
             after:bg-gradient-to-r after:from-emerald-400 after:to-teal-400 
             after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-full" >Contact</a>
           

            <button 
              onClick={goToAuth}
              className="px-7 py-2.5 rounded-full font-semibold tracking-wide text-white
           bg-gradient-to-r from-emerald-500 to-green-500
           hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40
           transition-all duration-300"

            >
              Get Started
            </button>
          </div>

          {/* Tablet Menu (icons) */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10">
          <a
  href="#meditation"
  className="block px-6 py-4 text-gray-300 hover:text-white"
  onClick={() => setMobileMenuOpen(false)}
>
  Meditation
</a>
            <a
  href="#chatbot"
  className="block px-6 py-4 text-gray-300 hover:text-white"
  onClick={(e) => { e.preventDefault(); setShowChatbot(true); }}
>
  Chatbot
</a>
            <a 
              href="#features" 
              className="block px-6 py-4 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-6 py-4 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="block px-6 py-4 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            

            <button 
               onClick={goToAuth}
               className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-medium"
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

       <section
        id="meditation"
        className="relative py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/30 to-transparent"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Guided Meditation & Mindfulness
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Experience calm, clarity, and balance through AI-guided meditation practices
            rooted in ancient wisdom.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Breathing Meditation</h3>
              <p className="text-gray-400">
                Reduce stress and anxiety with guided breathing techniques.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Sleep & Relaxation</h3>
              <p className="text-gray-400">
                Calm your mind and improve sleep quality naturally.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Spiritual Focus</h3>
              <p className="text-gray-400">
                Connect with inner awareness through mantra & silence.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/meditation")}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/40 transition-all"
          >
            Explore Meditation
          </button>
        </div>
      </section>

      {/* Chatbot */}
     {showChatbot && (
  <section className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
    <div className="w-full max-w-6xl h-[600px] bg-[#f8fafc] rounded-2xl flex overflow-hidden shadow-2xl">

      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-[#0f172a] text-white p-5 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>

        <button className="bg-emerald-500 py-2 rounded-lg text-sm mb-6">
          + New Wellness Session
        </button>

        <div className="space-y-3 text-sm text-gray-300">
          <div className="bg-slate-800 p-2 rounded">Morning Meditation</div>
          <div className="bg-slate-800 p-2 rounded">Sleep Tips Jan 10</div>
          <div className="bg-slate-800 p-2 rounded">Nutrition Advice</div>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-6 border-t border-slate-700">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold">
            NW
          </div>
          <span className="text-sm">Nirvaha Wellness</span>
        </div>
      </div>

      {/* RIGHT AREA */}
      <div className="flex-1 relative bg-white p-10">

        {/* Close button */}
        <button
          onClick={() => setShowChatbot(false)}
          className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-2">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
        msg.sender === "user"
          ? "ml-auto bg-emerald-500 text-white"
          : "mr-auto bg-gray-200 text-gray-800"
      }`}
    >
      {msg.text}
    </div>
  ))}
</div>


        {/* Center text */}
       {messages.length === 0 && input.length === 0 &&(
  <div className="flex flex-col items-center justify-center h-full text-center">
    <div className="text-3xl mb-3 text-emerald-500">🌿</div>
    <h1 className="text-3xl font-bold mb-2">
      How can I support your wellness today?
    </h1>
    <p className="text-gray-500 max-w-md">
      Your sanctuary for peaceful conversation and holistic support.
    </p>
  </div>
)}




        {/* Bottom input */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 border px-4 py-3 rounded-xl focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-emerald-500 text-white px-5 rounded-xl"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  </section>
)}



      {/* Features Section */}
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
                description: 'Advanced AI that understands your emotions and provides empathetic guidance'
              },
              {
                icon: Heart,
                title: 'Spiritual & Cultural Depth',
                description: 'Grounded in ancient Indian philosophy, Vedic wisdom, and mindfulness practices'
              },
              {
                icon: Sparkles,
                title: 'Personalized Guidance',
                description: 'Your journey is unique. Get recommendations tailored to your specific needs'
              },
              {
                icon: Palette,
                title: 'Creative Healing Tools',
                description: 'Express and heal through music, art, journaling, and mindful silence'
              },
              {
                icon: Users,
                title: 'Community & Mentorship',
                description: 'Connect with peers and mentors who understand your journey'
              },
              {
                icon: Globe,
                title: 'Culturally Relevant',
                description: 'Designed specifically for Indian users with cultural sensitivity and awareness'
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
                    <button
      onClick={() => navigate("/booking")}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Book Now
    </button>
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
            <h3 className="font-semibold text-gray-600">Emergency Support</h3>
            <p className="text-gray-700">7780754541</p>
            <span className="text-red-500 text-sm">Available 24/7 for crisis situations</span>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-600">General Inquiries</h3>
            <p className="text-gray-700">nirvaha6@gmail.com</p>
            <span className="text-sm text-gray-600">Response within 4 hours</span>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-600">Global Headquarters</h3>
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
              <div>
                <img src={logo} alt="logo" className='w-40 h-12'/>
              </div>
              
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
