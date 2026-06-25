import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { useLang } from "../context/LanguageContext";
import AnnouncementBar from "../components/AnnouncementBar";
import SubsidyPopup from "../components/SubsidyPopup";

// ── SVG helpers ────────────────────────────────────────────────────────────────
function SunIcon({ className = "w-5 h-5 fill-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <rect x="11" y="1" width="2" height="4" rx="1" />
      <rect x="11" y="19" width="2" height="4" rx="1" />
      <rect x="1" y="11" width="4" height="2" rx="1" />
      <rect x="19" y="11" width="4" height="2" rx="1" />
      <rect x="4.2" y="3.8" width="2" height="4" rx="1" transform="rotate(45 4.2 3.8)" />
      <rect x="17" y="16.5" width="2" height="4" rx="1" transform="rotate(45 17 16.5)" />
      <rect x="16.5" y="3.8" width="2" height="4" rx="1" transform="rotate(-45 16.5 3.8)" />
      <rect x="3.8" y="16.5" width="2" height="4" rx="1" transform="rotate(-45 3.8 16.5)" />
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
    text: "Narhare Solar delivered exactly what they promised. The team was professional, the installation was smooth and our electricity bills have reduced significantly. Highly recommended!",
    name: "Shobha Sobkale",
    loc: "Durgesh Vihar",
    initials: "SS",
  },
  {
    text: "We installed a 50kW system for our factory and the ROI was amazing. The Narhare team handled everything from survey to commissioning seamlessly. Great service!",
    name: "Ankit Agrawal",
    loc: "Kalpana Nagar",
    initials: "AA",
  },
  {
    text: "Excellent after-sales support. Any issue we report is resolved within hours. The solar pump has completely eliminated our diesel cost on the farm.",
    name: "Mukesh Thakur",
    loc: "Ishan Park",
    initials: "MT",
  },
];

// ── Main page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const [testiIdx, setTestiIdx] = useState(0);
  const { t } = useLang();
  const t2 = testimonials[testiIdx];

  return (
    <>
      <Head>
        <title>Narhare Solar – Smart Solar Energy</title>
        <meta name="description" content="Narhare Solar provides efficient, reliable and affordable solar energy systems for homes, businesses and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Navbar />

      <AnnouncementBar />
      
      <SubsidyPopup />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        {/* Left */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-white">
          <span className="section-tag">{t("hero_tag")}</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-5">
            {t("hero_h1a")}<br />{t("hero_h1b")}<br />{t("hero_h1c")} <span className="text-yellow">{t("hero_h1d")}</span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">{t("hero_p")}</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="#contact" className="btn-yellow">{t("hero_btn1")}</Link>
            <Link href="#services" className="btn-outline">{t("hero_btn2")}</Link>
          </div>
          <div className="flex gap-10">
            {[["100+", t("hero_stat1")], ["100%", t("hero_stat2")], ["5+", t("hero_stat3")]].map(([num, lbl]) => (
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
            <div className="text-2xl font-extrabold leading-none">5+</div>
            <div className="text-[10px] tracking-wide mt-0.5">Years of Experience</div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ──────────────────────────────────────────────────── */}
      <section className="bg-navy grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: t("feat1_title"), desc: t("feat1_desc") },
          { icon: "M17 8C8 10 5.9 16.17 3.82 19.82M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z", title: t("feat2_title"), desc: t("feat2_desc") },
          { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: t("feat3_title"), desc: t("feat3_desc") },
          { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: t("feat4_title"), desc: t("feat4_desc") },
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
            <span className="section-tag">{t("about_tag")}</span>
            <h2 className="section-title">{t("about_h2")}</h2>
            <span className="yellow-bar" />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{t("about_p")}</p>
            <ul className="flex flex-col gap-3 mb-8">
              {[t("about_li1"), t("about_li2"), t("about_li3"), t("about_li4")].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <Check />{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-yellow">{t("about_btn")}</Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a3a6b] to-[#0d1f3c] h-72 flex items-center justify-center">
              <img
                src="/About us.jpeg"
                alt="Solar Installation"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="absolute -bottom-5 right-6 bg-yellow text-white rounded-xl px-6 py-3 text-center shadow-lg">
              <div className="text-3xl font-extrabold leading-none">5+</div>
              <div className="text-[10px] tracking-wide mt-1">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">{t("svc_tag")}</span>
          <h2 className="section-title">{t("svc_h2a")}<br />{t("svc_h2b")}</h2>
          <span className="yellow-bar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10", title: t("svc1_title"), desc: t("svc1_desc") },
              { icon: "M2 7h20M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", title: t("svc2_title"), desc: t("svc2_desc") },
              { icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", title: t("svc3_title"), desc: t("svc3_desc") },
              { icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 8v4l3 3", title: t("svc4_title"), desc: t("svc4_desc") },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
                <div className="w-11 h-11 rounded-xl bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4 group-hover:bg-yellow/20 transition-colors">
                  <Icon d={icon} className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-navy mb-2">{title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{desc}</p>
                <Link href="#contact" className="text-xs font-bold text-yellow flex items-center gap-1 hover:gap-2 transition-all">
                  {t("svc_learn")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SOLAR ─────────────────────────────────────────────────────── */}
      <section id="why-solar" className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">{t("why_tag")}</span>
          <h2 className="section-title">{t("why_h2a")}<br />{t("why_h2b")}</h2>
          <span className="yellow-bar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: t("why1_title"), desc: t("why1_desc") },
              { icon: "M22 12h-4l-3 9L9 3l-3 9H2", title: t("why2_title"), desc: t("why2_desc") },
              { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: t("why3_title"), desc: t("why3_desc") },
              { icon: "M17 8C8 10 5.9 16.17 3.82 19.82M16.87 8C17 6.87 17 4 17 4c0 0-3.12 1.29-4 4M5.82 16C4 16 2 17 2 19s2 3 2 3c0 0 .5-2 2-3 1.5-1 3.83-1 5-.83", title: t("why4_title"), desc: t("why4_desc") },
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
          <span className="section-tag">{t("proc_tag")}</span>
          <h2 className="section-title">{t("proc_h2")}</h2>
          <span className="yellow-bar" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 relative">
            <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0" />
            {[
              { n: "01", title: t("proc1_title"), desc: t("proc1_desc") },
              { n: "02", title: t("proc2_title"), desc: t("proc2_desc") },
              { n: "03", title: t("proc3_title"), desc: t("proc3_desc") },
              { n: "04", title: t("proc4_title"), desc: t("proc4_desc") },
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
          <span className="section-tag">{t("testi_tag")}</span>
          <h2 className="section-title">{t("testi_h2")}</h2>
          <span className="yellow-bar" />
          <div className="max-w-2xl mx-auto">
            <div className="border border-gray-100 rounded-2xl p-10 text-center shadow-sm">
              <div className="text-5xl text-yellow font-display leading-none mb-2">"</div>
              <p className="text-gray-500 text-sm leading-relaxed italic mb-6">{t2.text}</p>
              <div className="flex items-center justify-between">
                <button onClick={() => setTestiIdx((testiIdx - 1 + testimonials.length) % testimonials.length)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-yellow transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="#1a2340" strokeWidth="2.5" viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12" /></svg>
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">{t2.initials}</div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-navy">{t2.name}</div>
                    <div className="text-xs text-gray-400">{t2.loc}</div>
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
              <span className="section-tag">{t("proj_tag")}</span>
              <h2 className="section-title mb-0">{t("proj_h2")}</h2>
            </div>
            <Link href="/projects" className="btn-outline hidden sm:inline-flex">{t("proj_view")}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { badge: "Residential", color: "bg-green-500", title: "5kW Rooftop System", loc: "Pune, Maharashtra" },
              { badge: "Commercial", color: "bg-blue-600", title: "50kW On-Grid System", loc: "Indore, Madhya Pradesh" },
              { badge: "Industrial", color: "bg-purple-600", title: "200kW On-Grid System", loc: "Aurangabad, Maharashtra" },
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
              <h3 className="text-white text-xl font-extrabold">{t("cta_h3")}</h3>
              <p className="text-gray-400 text-sm">{t("cta_p")}</p>
            </div>
          </div>
          <Link href="#contact" className="btn-yellow flex-shrink-0">{t("cta_btn")}</Link>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">{t("contact_tag")}</span>
          <h2 className="section-title">{t("contact_h2")}</h2>
          <p className="text-gray-400 text-sm mb-8">{t("contact_p")}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form — takes 2 cols */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="bg-navy rounded-2xl p-8 flex flex-col gap-6">
              <h3 className="text-white text-base font-bold pb-4 border-b border-white/10">{t("contact_info_title")}</h3>
              {[
                { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", label: t("contact_phone_label"), value: "+91 9294818094" },
                { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label: t("contact_email_label"), value: "narharesolar@gmail.com" },
                { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0", label: t("contact_office_label"), value: "M/67/B, Sonagiri, Bhopal, Madhya Pradesh 462022" },
                { icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2", label: t("contact_hours_label"), value: t("contact_hours_val") },
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
                <div className="text-[10px] text-gray-500 uppercase tracking-wide mb-3">{t("contact_follow")}</div>
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
