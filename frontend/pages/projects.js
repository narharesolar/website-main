import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

const projects = [
  {
    id: 1,
    title: "Shobha Sobkale",
    location: "Durgesh Vihar",
    category: "Residential",
    capacity: "5 kW",
    year: "2025",
    //saving: "₹3,500/month",
    //desc: "Complete rooftop solar installation for a 3BHK home. Reduced monthly electricity bill from ₹4,200 to under ₹700.",
  },
  {
    id: 2,
    title: "Ankit Agrawal",
    location: "Kalpana Nagar",
    category: "Residential",
    capacity: "5 kW",
    year: "2025",
    //saving: "₹35,000/month",
    //desc: "High-capacity on-grid system for a retail complex. Full net metering setup with remote monitoring dashboard.",
  },
  {
    id: 3,
    title: "Prem Narayan Sahu",
    location: "Bhopal",
    category: "Residential",
    capacity: "5 kW",
    year: "2026",
    //saving: "₹1.2L/month",
    //desc: "Large-scale industrial solar for a manufacturing unit. System pays back in under 4 years with accelerated depreciation.",
  },
  {
    id: 4,
    title: "Mukesh Thakur",
    location: "Ishan Park",
    category: "Residential",
    capacity: "10 kW",
    year: "2023",
    //saving: "₹7,000/month",
    //desc: "Premium residential installation with battery backup for an independent bungalow. Zero power cuts since installation.",
  },
  {
    id: 5,
    title: "30kW Office Solar",
    location: "Bhopal, Madhya Pradesh",
    category: "Commercial",
    capacity: "30 kW",
    year: "2024",
    //saving: "₹22,000/month",
    //desc: "Rooftop solar for a 5-floor corporate office building. Integrated with existing building management system.",
  },
  {
    id: 6,
    title: "7.5HP Solar Pump",
    location: "Hoshangabad, MP",
    category: "Agricultural",
    capacity: "7.5 HP",
    year: "2022",
    //saving: "₹18,000/month",
    //desc: "Off-grid solar water pump replacing diesel pump for 15-acre farm irrigation. Qualifies under PM-KUSUM scheme.",
  },
  {
    id: 7,
    title: "100kW Hospital Solar",
    location: "Pune, Maharashtra",
    category: "Commercial",
    capacity: "100 kW",
    year: "2024",
    //saving: "₹75,000/month",
    //desc: "Mission-critical solar system with battery backup for an 80-bed private hospital. 24×7 uninterrupted power.",
  },
  {
    id: 8,
    title: "15kW Society Solar",
    location: "Nashik, Maharashtra",
    category: "Residential",
    capacity: "15 kW",
    year: "2023",
    //saving: "₹10,000/month",
    //desc: "Common area solar for a 20-unit housing society covering lifts, lighting, and water pump loads.",
  },
  {
    id: 9,
    title: "500kW Industrial Park",
    location: "Pithampur, MP",
    category: "Industrial",
    capacity: "500 kW",
    year: "2024",
    //saving: "₹3.5L/month",
    //desc: "Ground-mounted solar for an industrial park with 12 units. Centralized metering with per-unit billing split.",
  },
  {
    id: 10,
    title: "3x 5HP Farm Pumps",
    location: "Sehore, MP",
    category: "Agricultural",
    capacity: "15 HP total",
    year: "2023",
    //saving: "₹45,000/month",
    //desc: "PM-KUSUM scheme installation for a farmer co-operative. Three solar pumps serving 40 farmers across 80 acres.",
  },
  {
    id: 11,
    title: "25kW School Solar",
    location: "Indore, MP",
    category: "Commercial",
    capacity: "25 kW",
    year: "2022",
    //saving: "₹18,000/month",
    //desc: "Rooftop solar for a private school campus. Also used as a live demonstration unit for students learning about renewable energy.",
  },
  {
    id: 12,
    title: "8kW Villa System",
    location: "Lavasa, Maharashtra",
    category: "Residential",
    capacity: "8 kW",
    year: "2024",
    //saving: "₹5,500/month",
    //desc: "Aesthetic flush-mounted solar panels for a luxury villa. Designed to maintain architectural aesthetics while maximising output.",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Agricultural"];

const categoryColors = {
  Residential: "bg-green-100 text-green-700",
  Commercial:  "bg-blue-100 text-blue-700",
  Industrial:  "bg-purple-100 text-purple-700",
  Agricultural:"bg-orange-100 text-orange-700",
};

function Icon({ d }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="#f5a623" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const { t } = useLang();

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <Head>
        <title>Projects | Narhare Solar Solutions</title>
        <meta name="description" content="Browse all solar projects completed by Narhare Solar Solutions across Maharashtra and Madhya Pradesh." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #f5a623 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-yellow text-xs font-extrabold tracking-widest uppercase block mb-3">{t("proj_tag")}</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            500+ Projects.<br />
            <span className="text-yellow">Real Results.</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
            From small rooftops to large industrial parks — every project we deliver is built to perform for decades.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["500+", "Projects Completed"],
            ["12+ MW", "Capacity Installed"],
            ["100%", "Customer Satisfaction"],
            ["10+", "Years Experience"],
          ].map(([num, lbl]) => (
            <div key={lbl} className="text-center">
              <div className="text-2xl font-extrabold text-white">{num}</div>
              <div className="text-yellow-100 text-xs mt-0.5 opacity-90">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${
                  active === cat
                    ? "bg-yellow text-white border-yellow"
                    : "bg-white text-navy border-gray-200 hover:border-yellow hover:text-yellow"
                }`}>
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">

                {/* Card image area */}
                <div className="h-44 bg-gradient-to-br from-[#1a3a6b] to-[#0d1f3c] relative flex items-center justify-center">
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full ${categoryColors[p.category]}`}>
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                    {p.year}
                  </span>
                  {/* Solar panel SVG illustration */}
                  <svg viewBox="0 0 120 80" className="w-2/3 opacity-70" fill="none">
                    <rect x="5" y="10" width="110" height="60" rx="5"
                      stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
                    {[1, 2].map(i => (
                      <line key={i} x1="5" y1={10 + i * 20} x2="115" y2={10 + i * 20}
                        stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    ))}
                    {[1, 2, 3].map(i => (
                      <line key={i} x1={5 + i * 27} y1="10" x2={5 + i * 27} y2="70"
                        stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    ))}
                    <circle cx="60" cy="5" r="4" fill="#f5a623" opacity="0.8" />
                  </svg>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-sm font-extrabold text-navy mb-1">{p.title}</h3>
                  
                  

                  {/* Stats row */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <div className="flex-1 text-center">
                      <div className="text-sm font-extrabold text-navy">{p.capacity}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Capacity</div>
                    </div>
                    <div className="w-px bg-gray-100" />
                    <div className="flex-1 text-center">
                      <div className="text-sm font-extrabold text-yellow">{p.location}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Location</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 text-sm">No projects found.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 px-6 text-center">
        <h2 className="text-white text-2xl font-extrabold mb-2">Your project could be next</h2>
        <p className="text-gray-400 text-sm mb-6">
          Join hundreds of satisfied clients across Maharashtra and Madhya Pradesh.
        </p>
        <Link href="/#contact" className="btn-yellow inline-flex">Get a Free Quote →</Link>
      </section>

      <Footer />
    </>
  );
}
