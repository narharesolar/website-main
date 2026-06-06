import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1228] pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-yellow rounded-md flex items-center justify-center">
              <img
              src="/logo.jpeg"
              alt="Narhare Solar Logo"
              className="h-14 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm leading-none">NARHARE</div>
              <div className="text-gray-500 text-[8px] tracking-widest uppercase">Solar</div>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Powering a sustainable future with smart solar solutions.
          </p>
          <div className="flex gap-2">
            {[
              <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
              <><rect key="ig1" x="2" y="2" width="20" height="20" rx="5" /><path key="ig2" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /></>,
              <><path key="li1" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect key="li2" x="2" y="9" width="4" height="12" /><circle key="li3" cx="4" cy="4" r="2" /></>,
              <><path key="yt" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.54A2.78 2.78 0 0 0 3.4 19.5C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon key="yt2" points="9.75,15.02 15.5,12 9.75,8.98" fill="#0d1228" /></>,
            ].map((icon, i) => (
              <a key={i} href="#" className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center hover:bg-yellow transition-colors">
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">{icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-bold mb-3 pb-1.5 border-b-2 border-yellow inline-block">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {["Home", "About Us", "Services", "Projects", "Why Solar", "Testimonials", "Contact Us"].map((l) => (
              <li key={l}><Link href="#" className="text-gray-400 text-xs hover:text-yellow transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-bold mb-3 pb-1.5 border-b-2 border-yellow inline-block">Our Services</h4>
          <ul className="flex flex-col gap-2">
            {["Rooftop Solar Solutions", "Commercial Solar Solutions", "Solar Installation", "Operation & Maintenance"].map((s) => (
              <li key={s}><Link href="#" className="text-gray-400 text-xs hover:text-yellow transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-bold mb-3 pb-1.5 border-b-2 border-yellow inline-block">Contact Us</h4>
          <div className="flex flex-col gap-3">
            {[
              { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", text: "+91 92948 18094" },
              { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", text: "narharesolar@gmail.com" },
              { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0", text: "M/67/B, Sonagiri, Bhopal, Madhya Pradesh 462022" },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex gap-2 items-start">
                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="#f5a623" strokeWidth="2" viewBox="0 0 24 24">
                  <path d={icon} />
                </svg>
                <span className="text-gray-400 text-xs leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-600 text-xs">© 2026 Narhare Solar. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-600 text-xs hover:text-yellow">Privacy Policy</Link>
          <Link href="#" className="text-gray-600 text-xs hover:text-yellow">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
