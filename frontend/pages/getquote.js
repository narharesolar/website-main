import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function GetQuote() {
  return (
    <>
      <Head>
        <title>Get a Free Solar Quote – Narhare Solar</title>
        <meta name="description" content="Get a free solar quote from Narhare Solar. We serve homes, businesses and farms across Madhya Pradesh." />
      </Head>

      {/* Top bar */}
      <div className="bg-navy py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="Narhare Solar" className="h-12 w-auto object-contain" />
        </Link>
        <a href="tel:+91 92948 18094"
          className="flex items-center gap-2 text-white text-sm font-semibold hover:text-yellow transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +91 96765 43210
        </a>
      </div>

      {/* Main */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="bg-yellow text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Free Consultation
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-navy mt-4 mb-3">
              Get Your Free Solar Quote Today
            </h1>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Fill the form below and our solar expert will call you back within 2 hours with a customized solution and pricing.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "✅ 100% Free Consultation",
              "⚡ Response within 2 hours",
              "🏆 100+ Happy Customers",
              "📋 No obligation quote",
            ].map((badge) => (
              <span key={badge} className="bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                {badge}
              </span>
            ))}
          </div>

          {/* Form */}
          <ContactForm />

          {/* Footer note */}
          <p className="text-center text-gray-400 text-xs mt-6">
            🔒 Your information is safe with us. We never share your details with third parties.
          </p>

          {/* Back to website */}
          <div className="text-center mt-6">
            <Link href="/" className="text-yellow text-sm font-semibold hover:underline">
              ← Back to Narhare Solar website
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}