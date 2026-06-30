import { useState, useEffect } from "react";
import Link from "next/link";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return setTimeLeft({ expired: true });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-red-600 text-white font-extrabold text-2xl w-16 h-16 rounded-xl flex items-center justify-center tabular-nums shadow-lg">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-gray-500 text-xs mt-1 font-semibold uppercase tracking-wide">{label}</div>
    </div>
  );
}

export default function SubsidyPopup() {
  const [open, setOpen] = useState(false);
  const timeLeft = useCountdown("2027-03-31T23:59:59");

  useEffect(() => {
    // Show popup after 2 seconds, only once per session
    const seen = sessionStorage.getItem("subsidy_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("subsidy_popup_seen", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-up">

        {/* Red top banner */}
        <div className="bg-red-600 px-6 py-4 text-center relative">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping absolute opacity-60" />
            <span className="w-2.5 h-2.5 bg-white rounded-full relative" />
            <span className="text-white font-extrabold text-sm tracking-widest uppercase ml-3">
              Urgent Notice
            </span>
          </div>
          <p className="text-white/90 text-xs mt-1">Government of India</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 text-center">
          <div className="text-4xl mb-3">⚡</div>
          <h2 className="text-xl font-extrabold text-navy mb-2 leading-tight">
            Govt. Subsidy for Solar<br />Ends on <span className="text-red-600">31st March 2027</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Don't miss the PM Surya Ghar Yojana subsidy — get up to <strong className="text-navy">₹78,000 off</strong> on your solar installation. Claim before the deadline!
          </p>

          {/* Countdown */}
          {!timeLeft.expired && (
            <div className="mb-6">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">Time Remaining</p>
              <div className="flex justify-center gap-3">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Mins" />
                <TimeBox value={timeLeft.seconds} label="Secs" />
              </div>
            </div>
          )}

          {/* CTA */}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm mb-3"
          >
            Claim Subsidy Now →
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 text-xs hover:text-gray-600 transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
