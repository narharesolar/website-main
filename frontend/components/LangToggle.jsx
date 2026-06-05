import { useLang } from "../context/LanguageContext";

export default function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 border-2 border-navy text-navy font-bold text-xs px-3 py-1.5 rounded-full hover:bg-navy hover:text-white transition-all"
      title={lang === "en" ? "हिंदी में देखें" : "View in English"}
    >
      <span className="text-sm">{lang === "en" ? "🇮🇳" : "🇬🇧"}</span>
      {lang === "en" ? "हिंदी" : "English"}
    </button>
  );
}
