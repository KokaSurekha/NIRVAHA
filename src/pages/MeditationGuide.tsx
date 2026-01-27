import React from "react";
import heroImage from "../hero.png";
import wellness1 from "../wellness1.jpeg";
import wellness2 from "../wellness2.jpeg";
import wellness3 from "../wellness3.jpeg";
import wellness4 from "../wellness4.jpeg";
import wellness5 from "../wellness5.jpeg";
import wellness6  from "../wellness6.jpeg";
import wellness7  from "../wellness7.jpeg";
import wellness12  from "../wellness12.jpeg";
import wellness13 from "../wellness13.jpeg";
import wellness11 from "../wellness11.jpeg";

import balasana from "../balasana.jpeg";
import ardha from "../ArdhaMatsyendrasana.jpeg";
import butterfly from "../ButterflyPose.jpeg";
import padmasana from "../Padmasana.jpeg";
import savasana from "../Savasana.jpeg";
import sukhasana from "../Sukhasana.jpeg";
import vairasana from "../Virasana.jpeg";
import virkshana  from "../Vrikshasana.jpeg";
import virkshasana from "../Vajrasana.jpeg";



// Main Page Component
export default function MeditationGuide() {
  return (
    <div className="font-sans text-gray-700">
      <HeroSection />
      <MeditationImages />
      <MeditationPoses />
      <EssentialGuidance />
      <ConsultSection />
      <Footer />
    </div>
  );
}

// Hero Section
const HeroSection: React.FC = () => (
  <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background" />
  </div>

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
    <span className="mb-4 inline-block animate-fade-up rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
      ✨ Begin Your Journey Within
    </span>

    <h1 className="mb-6 max-w-4xl animate-fade-up font-display text-5xl font-light leading-tight text-primary-foreground md:text-7xl [animation-delay:100ms]">
      Meet Allert Your
      <span className="block font-semibold italic text-secondary">
        Meditation
      </span>
      Guide
    </h1>

    <p className="mb-8 max-w-2xl animate-fade-up font-sans text-lg text-primary-foreground/90 [animation-delay:200ms]">
      Discover inner peace through ancient wisdom and modern practice.
      Choose your path to mindfulness and transform your life.
    </p>

    <div className="flex animate-fade-up gap-4 [animation-delay:300ms]">
      <a
        href="#consult"
        className="rounded-full border-2 border-primary-foreground/30 px-8 py-3 font-medium text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
      >
        Free Consultation
      </a>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/50 p-1">
      <div className="h-2 w-1 animate-pulse rounded-full bg-primary-foreground/50" />
    </div>
  </div>
</section>
);

const MeditationImages: React.FC = () => (
  <section className="py-20 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">

      <div className="mb-12 text-center">
        <h2 className="text-4xl mb-4">
          Poses for <span className="italic text-emerald-600">Meditation</span>
        </h2>
        <p className="text-gray-500">
          Prepare your body and mind with yoga asanas
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { src: wellness1, alt: "Sukhasana - Easy Pose" },
          { src: wellness2, alt: "Cosmic Meditation" },
          { src: wellness3, alt: "Vajrasana - Thunderbolt Pose" },
          { src: wellness4, alt: "Padmasana - Lotus Pose" },
          { src: wellness5, alt: "Savasana - Corpse Pose" },
          { src: wellness6, alt: "Zen Garden Meditation" },
          { src: wellness7, alt: "Vrikshasana - Tree Pose" },
          { src: wellness12, alt: "Dhyana - Deep Meditation" },
          { src: wellness13, alt: "Pranayama - Breath Control" },
          { src: wellness11, alt: "Breath Awareness" },
        ].map((img, i) => {
          const floatClass =
            i % 2 === 0 ? "animate-float-up" : "animate-float-down";

          return (
            <div
              key={i}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-lg ${floatClass}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                  {img.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);


// Meditation Poses Section
const MeditationPoses: React.FC = () => {
  const poses = [
    {
      name: "Lotus Pose (Padmasana)",
      intensity: "Gentle",
      duration: "10–30 mins",
      image: padmasana,
    },
    {
      name: "Easy Pose (Sukhasana)",
      intensity: "Gentle",
      duration: "5–20 mins",
      image: sukhasana,
    },
    {
      name: "Thunderbolt Pose (Vajrasana)",
      intensity: "Gentle",
      duration: "5–15 mins",
      image: vairasana,
    },
    {
      name: "Tree Pose (Vrikshasana)",
      intensity: "Moderate",
      duration: "1–3 mins",
      image: virkshasana,
    },
    {
      name: "Child's Pose (Balasana)",
      intensity: "Gentle",
      duration: "10–30 mins",
      image: balasana,
    },
    {
      name: "Corpse Pose (Savasana)",
      intensity: "Gentle",
      duration: "5–20 mins",
      image: savasana,
    },
    {
      name: "Hero Pose (Virasana)",
      intensity: "Gentle",
      duration: "5–15 mins",
      image: vairasana,
    },
    {
      name: "Butterfly Pose (Baddha Konasana)",
      intensity: "Moderate",
      duration: "3-10 mins",
      image: butterfly,
    },
    {
      name: "Seated Forward Bend (Paschimottanasana)",
      intensity: "Gentle",
      duration: "1-5 mins",
      image: vairasana,
    },
    {
      name: "Half Spinal Twist (Ardha Matsyendrasana)",
      intensity: "Gentle",
      duration: "30 seconds - 2 minutes per side",
      image: ardha,
    },
    
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-16 text-center">
          <h2 className="text-4xl">
            Yoga for <span className="italic text-emerald-600">Meditation</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Prepare your body for stillness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {poses.map((pose, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-white shadow-md overflow-hidden
              ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <img
                src={pose.image}
                alt={pose.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium">{pose.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {pose.intensity} • {pose.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


const PoseCard: React.FC<PoseProps> = ({ title, level, duration, image }) => (
  <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
    <img src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-5">
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{level} • {duration}</p>
    </div>
  </div>
);

// Essential Guidance Section
const EssentialGuidance: React.FC = () => {
  const guidanceItems = [
    { icon: "🧘", title: "Start Small", description: "Begin with just 5 minutes daily. Consistency matters more than duration." },
    { icon: "🌅", title: "Morning Practice", description: "Early morning is ideal when the mind is fresh and distractions are minimal." },
    { icon: "🪷", title: "Create Sacred Space", description: "Designate a quiet corner for your practice." },
    { icon: "📱", title: "Disconnect to Connect", description: "Put devices on silent for true stillness." },
    { icon: "🌬️", title: "Breathe First", description: "Begin with deep breaths before meditation." },
    { icon: "❤️", title: "Be Patient", description: "Gently guide the mind back without judgment." },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl">
            Essential <span className="italic text-emerald-600">Guidance</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Principles to deepen your meditation journey
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guidanceItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


const GuidanceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
    <h4 className="text-lg font-medium mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Consult Section
const ConsultSection: React.FC = () => (
  <section className="py-20 px-6 bg-emerald-700 text-white">
    <h2 className="text-3xl text-center mb-4">Consult Us for <span className="italic">Free Guidance</span></h2>
    <p className="text-center max-w-2xl mx-auto mb-10 opacity-90">
      Struggling with sleep, stress, anxiety, or focus? Our experts are here to help — at no cost.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {['Sleep Issues', 'Stress & Anxiety', 'Focus Problems', 'Emotional Balance', 'Spiritual Growth', 'Physical Tension'].map(item => (
        <span key={item} className="px-4 py-2 bg-white/20 rounded-full text-sm">{item}</span>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <ActionCard title="Call Us" subtitle="Quick consultation" />
      <ActionCard title="Live Chat" subtitle="Instant support" />
      <ActionCard title="Email Us" subtitle="Detailed response" />
    </div>

    <p className="text-center text-sm mt-10 opacity-80">✓ 100% Free • ✓ No Obligations • ✓ Expert Guidance</p>
  </section>
);

const ActionCard: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-white/10 p-8 rounded-2xl text-center hover:bg-white/20 transition">
    <h4 className="text-lg font-medium mb-1">{title}</h4>
    <p className="text-sm opacity-80">{subtitle}</p>
  </div>
);

// Footer
const Footer: React.FC = () => (
  <footer className="py-6 text-center text-sm text-gray-500">
    © 2024 Meditation Guide. Find your inner peace.
  </footer>
);
