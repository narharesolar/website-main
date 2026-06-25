import { useState, useEffect } from "react";

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

function Pad({ n }) {
  return (
    <span className="inline-flex flex-col items-center">
      <span className="bg-white text-red-600 font-extrabold text-xs px-1.5 py-0.5 rounded min-w-[26px] text-center tabular-nums">
        {String(n).padStart(2, "0")}
      </span>
    </span>
  );
}

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const timeLeft = useCountdown("2027-05-31T23:59:59");

  if (!visible) return null;

  return (
    <div className="relative bg-red-600 text-white text-xs font-semibold py-2 px-4 flex items-center justify-center gap-3 flex-wrap z-50 animate-pulse-subtle">
      {/* Flashing dot */}
      <span className="flex items-center gap-1.5 shrink-0">
        <span className="w-2 h-2 bg-white rounded-full animate-ping absolute opacity-75" />
        <span className="w-2 h-2 bg-white rounded-full relative" />
      </span>

      <span className="text-center tracking-wide">
        ⚠️ <strong>Govt. Subsidy for New Connections ends on 31st May 2027</strong>
      </span>

      {/* Countdown */}
      {!timeLeft.expired && (
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="opacity-80">Ends in:</span>
          <div className="flex items-center gap-1">
            <Pad n={timeLeft.days} /><span className="opacity-70">d</span>
            <Pad n={timeLeft.hours} /><span className="opacity-70">h</span>
            <Pad n={timeLeft.minutes} /><span className="opacity-70">m</span>
            <Pad n={timeLeft.seconds} /><span className="opacity-70">s</span>
          </div>
        </div>
      )}

      {/* Close */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
