import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../frontend/components/Navbar";
import Footer from "../frontend/components/Footer";
import ContactForm from "../frontend/components/ContactForm";

// ── SVG helpers ────────────────────────────────────────────────────────────────
function SunIcon({ className = "w-5 h-5 fill-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <rect x="11" y="1" width="2" height="4" rx="1" />
      <rect x="11" y="19" width="2" height="4" rx="1" />
      <rect x="1" y="11" width="4" height="2" rx="1" />
      <rect x="19" y="11" width="4" height="2" rx="1" />
      <rect x="4.2" y="3.8" width="2" height="4" rx="1" transform="rotate(-45 16.5 3.8)" />
      <rect x="17" y="16.5" width="2" height="4" rx="1" transform="rotate(-45 3.8 16.5)" />
      <rect x="16.5" y="3.8" width="2" height="4" rx="1" transform="rotate(45 4.2 3.8)" />
      <rect x="3.8" y="16.5" width="2" height="4" rx="1" transform="rotate(45 17 16.5)" />
    </svg>
  );
}

function Icon({ d, className = "w-5 h-5", stroke = "#f5a623" }) {
  return (
    <svg className={className} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
}

function Check() {
  return (
    <div className="w-5 h-5 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 10 10">
        <polyline points="1.5,5 4,7.5 8.5,2.5" />
      </svg>
    </div>
  );
}

// ── Testimonials data ──────────────────────────────────────────────────────────
const testimonials = [
  {
    text: "Narhare Solar Solutions delivered exactly what they promised. The team was professional, the installation was smooth and our electricity bills have reduced significantly. Highly recommended!",
    name: "Shakti Parmar",
    loc: "Pune, Maharashtra",
    initials: "RD",
  },
  {
    text: "We installed a 50kW system for our factory and the ROI was amazing. The Narhare team handled everything from survey to commissioning seamlessly. Great service!",
    name: "Suresh Mehta",
    loc: "Indore, Madhya Pradesh",
    initials: "SM",
  },
  {
    text: "Excellent after-sales support. Any issue we report is resolved within hours. The solar pump has completely eliminated our diesel cost on the farm.",
    name: "Priya Kulkarni",
    loc: "Aurangabad, Maharashtra",
    initials: "PK",
  },
  {
    text: "Good Services",
    name: "Gautam Joshi",
    loc: "Bhopal, Madhya Pradesh",
    initials: "GJ",
  },
];

// ── Main page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const [testiIdx, setTestiIdx] = useState(0);
  const t = testimonials[testiIdx];

  return (
    <>
      <Head>
        <title>Narhare Solar Solutions – Smart Solar Energy</title>
        <meta name="description" content="Narhare Solar Solutions provides efficient, reliable and affordable solar energy systems for homes, businesses and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        {/* Left */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-white">
          <span className="section-tag">Powering a Brighter Future</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-5">
            Smart Solar<br />Solutions for<br />a <span className="text-yellow">Better Tomorrow</span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            Narhare Solar Solutions provides efficient, reliable and affordable solar energy systems for homes, businesses and industries.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="#contact" className="btn-yellow">Get a Free Quote →</Link>
            <Link href="#services" className="btn-outline">Explore Services →</Link>
          </div>
          <div className="flex gap-10">
            {[["500+", "Projects Completed"], ["100%", "Customer Satisfaction"], ["10+", "Years of Experience"]].map(([num, lbl]) => (
              <div key={lbl} className="text-center">
                <div className="text-2xl font-extrabold text-navy">{num}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark panel with solar graphic */}
        <div className="relative flex items-center justify-center min-h-[320px] lg:min-h-0">
           <img
              src="/Hero.png"
              alt="Solar Installation"
              className="w-full h-full object-cover absolute inset-0"
            />
          {/* badge */}
          <div className="absolute bottom-6 right-6 bg-yellow text-white rounded-xl px-5 py-3 text-center shadow-lg">
            <div className="text-2xl font-extrabold leading-none">10+</div>
            <div className="text-[10px] tracking-wide mt-0.5">Years of Experience</div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ──────────────────────────────────────────────────── */}
      <section className="bg-navy grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "Save on Electricity Bills", desc: "Reduce your energy bills up to 80% with solar power." },
          { icon: "M17 8C8 10 5.9 16.17 3.82 19.82M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z", title: "Clean & Green Energy", desc: "Eco-friendly energy that helps protect our planet." },
          { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Reliable & Durable", desc: "High quality systems built to last for decades." },
          { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "Expert Support", desc: "From consultation to after sales support – always with you." },
        ].map(({ icon, title, desc }, i) => (
          <div key={i} className={`flex flex-col gap-3 p-8 ${i < 3 ? "border-b lg:border-b-0 lg:border-r border-white/10" : ""}`}>
            <div className="w-10 h-10 rounded-full bg-yellow/20 flex items-center justify-center">
              <Icon d={icon} className="w-5 h-5" />
            </div>
            <h4 className="text-white text-sm font-bold">{title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about-us" className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Building a Sustainable<br />Future with Solar Energy</h2>
            <span className="yellow-bar" />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Narhare Solar Solutions is a leading provider of solar energy solutions in India. We are committed to delivering high-quality, cost-effective and sustainable solar systems tailored to your needs.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {["Tailored solar solutions for every need", "High quality products & advanced technology", "Professional installation by expert team", "Timely delivery & reliable service"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <Check />{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-yellow">Know More About Us →</Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a3a6b] to-[#0d1f3c] h-72 flex items-center justify-center">
              <svg viewBox="0 0 260 160" className="w-3/4 opacity-80" fill="none">
                <rect x="10" y="20" width="240" height="120" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                {[1,2].map(i => <line key={i} x1="10" y1={20+i*40} x2="250" y2={20+i*40} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />)}
                {[1,2,3].map(i => <line key={i} x1={10+i*60} y1="20" x2={10+i*60} y2="140" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />)}
                <circle cx="130" cy="10" r="8" fill="#f5a623" />
              </svg>
            </div>
            <div className="absolute -bottom-5 right-6 bg-yellow text-white rounded-xl px-6 py-3 text-center shadow-lg">
              <div className="text-3xl font-extrabold leading-none">10+</div>
              <div className="text-[10px] tracking-wide mt-1">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Complete Solar Solutions<br />for Every Need</h2>
          <span className="yellow-bar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10", title: "Rooftop Solar Solutions", desc: "Customized rooftop solar systems for homes and businesses." },
              { icon: "M2 7h20M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", title: "Commercial Solar Solutions", desc: "Power your business with high-performance solar systems." },
              { icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", title: "Solar Installation & Commissioning", desc: "End-to-end installation and commissioning by our expert team." },
              { icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 8v4l3 3", title: "Operation & Maintenance", desc: "Keep your system efficient with our reliable O&M services." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
                <div className="w-11 h-11 rounded-xl bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4 group-hover:bg-yellow/20 transition-colors">
                  <Icon d={icon} className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-navy mb-2">{title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{desc}</p>
                <Link href="#contact" className="text-xs font-bold text-yellow flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SOLAR ─────────────────────────────────────────────────────── */}
      <section id="why-solar" className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">Why Solar?</span>
          <h2 className="section-title">Benefits That<br />Make a Difference</h2>
          <span className="yellow-bar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Reduce Electricity Bills", desc: "Save up to 80% on your monthly electricity bills." },
              { icon: "M22 12h-4l-3 9L9 3l-3 9H2", title: "Increase Property Value", desc: "Homes and businesses with solar have higher value." },
              { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "Energy Independence", desc: "Generate your own power and be independent from rising electricity prices." },
              { icon: "M17 8C8 10 5.9 16.17 3.82 19.82M16.87 8C17 6.87 17 4 17 4c0 0-3.12 1.29-4 4M5.82 16C4 16 2 17 2 19s2 3 2 3c0 0 .5-2 2-3 1.5-1 3.83-1 5-.83", title: "Environment Friendly", desc: "Reduce carbon footprint and contribute to a cleaner planet." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Icon d={icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy mb-1">{title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">Our Simple 4-Step Process</h2>
          <span className="yellow-bar" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 relative">
            {/* connector line desktop */}
            <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0" />
            {[
              { n: "01", title: "Consultation", desc: "We understand your needs and analyze your requirements." },
              { n: "02", title: "Site Survey", desc: "Our experts visit your site and do a detailed assessment." },
              { n: "03", title: "Proposal", desc: "We provide a custom proposal with the best solar solution." },
              { n: "04", title: "Installation", desc: "Professional installation and commissioning with full support." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex flex-col items-center text-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-yellow text-white text-sm font-extrabold flex items-center justify-center mb-3 shadow-md">
                  {n}
                </div>
                <h4 className="text-sm font-bold text-navy mb-1">{title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed px-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <span className="yellow-bar" />
          <div className="max-w-2xl mx-auto">
            <div className="border border-gray-100 rounded-2xl p-10 text-center shadow-sm">
              <div className="text-5xl text-yellow font-display leading-none mb-2">"</div>
              <p className="text-gray-500 text-sm leading-relaxed italic mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <button onClick={() => setTestiIdx((testiIdx - 1 + testimonials.length) % testimonials.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-yellow transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="#1a2340" strokeWidth="2.5" viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12" /></svg>
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.loc}</div>
                  </div>
                </div>
                <button onClick={() => setTestiIdx((testiIdx + 1) % testimonials.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-yellow transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="#1a2340" strokeWidth="2.5" viewBox="0 0 14 14"><polyline points="5,2 10,7 5,12" /></svg>
                </button>
              </div>
              <div className="flex justify-center gap-1.5 mt-5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestiIdx(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === testiIdx ? "bg-yellow" : "bg-gray-200"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section id="projects" className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="section-tag">Our Projects</span>
              <h2 className="section-title mb-0">Some of Our Recent Projects</h2>
            </div>
            <Link href="#" className="btn-outline hidden sm:inline-flex">View All Projects →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { badge: "Commercial", color: "bg-blue-600", title: "18kW On-Grid System", loc: "Bhawani Paradise Resort" },
              { badge: "Residential", color: "bg-green-500", title: "9.8kW Rooftop System", loc: "Bhopal, Madhya Pradesh" },
              { badge: "Residential", color: "bg-green-500", title: "200kW On-Grid System", loc: "Bhopal, Madhya Pradesh" },
            ].map(({ badge, color, title, loc }) => (
              <div key={title} className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-44 bg-gradient-to-br from-[#1a3a6b] to-[#0d1f3c] relative flex items-center justify-center">
                  <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 rounded-full ${color}`}>{badge}</span>
                  <svg viewBox="0 0 120 80" className="w-2/3 opacity-70" fill="none">
                    <rect x="5" y="10" width="110" height="60" rx="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
                    {[1,2].map(i => <line key={i} x1="5" y1={10+i*20} x2="115" y2={10+i*20} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />)}
                    {[1,2,3].map(i => <line key={i} x1={5+i*27} y1="10" x2={5+i*27} y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />)}
                  </svg>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-sm font-extrabold text-navy mb-0.5">{title}</h4>
                  <p className="text-xs text-gray-400">{loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-10 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-yellow/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="#f5a623" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-extrabold">Ready to Switch to Solar Energy?</h3>
              <p className="text-gray-400 text-sm">Get a free consultation and customized solution for your energy needs.</p>
            </div>
          </div>
          <Link href="#contact" className="btn-yellow flex-shrink-0">Get a Free Quote →</Link>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Get a Free Quote</h2>
          <p className="text-gray-400 text-sm mb-8">Fill the form and our team will get back to you shortly.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form — takes 2 cols */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="bg-navy rounded-2xl p-8 flex flex-col gap-6">
              <h3 className="text-white text-base font-bold pb-4 border-b border-white/10">Contact Information</h3>
              {[
                { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", label: "Phone", value: "+91 9294818094" },
                { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label: "Email", value: "narharesolar@gmail.com" },
                { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0", label: "Office", value: "M/67/B, Sonagiri, Bhopal, Madhya Pradesh 462022" },
                { icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2", label: "Working Hours", value: "Mon - Sat: 10:00 AM - 7:30 PM" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Icon d={icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide">{label}</div>
                    <div className="text-white text-xs font-semibold mt-0.5 leading-relaxed">{value}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide mb-3">Follow Us</div>
                <div className="flex gap-2">
                  {[
                    "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
                  ].map((d, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yellow transition-colors">
                      <Icon d={d} className="w-4 h-4" stroke="white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
