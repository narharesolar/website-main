import { useState } from "react";
import Link from "next/link";
import LangToggle from "./LangToggle";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const navItems = [
    { key: "nav_home",         href: "/" },
    { key: "nav_about",        href: "/#about-us" },
    { key: "nav_services",     href: "/#services" },
    { key: "nav_projects",     href: "/projects" },
    { key: "nav_whysolar",     href: "/#why-solar" },
    { key: "nav_testimonials", href: "/#testimonials" },
    { key: "nav_contact",      href: "/#contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="Narhare Solar Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(({ key, href }) => (
            <Link key={key} href={href} className="text-sm font-semibold text-navy hover:text-yellow transition-colors">
              {t(key)}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LangToggle />
          <Link href="/#contact" className="btn-yellow">{t("nav_cta")}</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="#1a2340" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navItems.map(({ key, href }) => (
            <Link key={key} href={href}
              className="text-sm font-semibold text-navy hover:text-yellow" onClick={() => setOpen(false)}>
              {t(key)}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <LangToggle />
            <Link href="/#contact" className="btn-yellow flex-1 justify-center" onClick={() => setOpen(false)}>
              {t("nav_cta")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
