import { useState } from "react";
import { useLang } from "../context/LanguageContext";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN";
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "YOUR_CHAT_ID";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", service: "", message: "" });
  const [status, setStatus] = useState("idle");
  const { t } = useLang();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      alert("Please fill in Name, Phone and Email.");
      return;
    }
    setStatus("loading");

    const text =
      `🌞 *New Quote Request — Narhare Solar Solutions*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📧 *Email:* ${form.email}\n` +
      `🏙️ *City:* ${form.city || "—"}\n` +
      `🔧 *Service:* ${form.service || "—"}\n` +
      `💬 *Message:* ${form.message || "—"}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", city: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-navy uppercase tracking-wide">{t("form_name")} *</label>
          <input name="name" value={form.name} onChange={change} placeholder={t("form_name_ph")}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-yellow transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-navy uppercase tracking-wide">{t("form_phone")} *</label>
          <input name="phone" value={form.phone} onChange={change} placeholder={t("form_phone_ph")}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-yellow transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-navy uppercase tracking-wide">{t("form_email")} *</label>
          <input name="email" type="email" value={form.email} onChange={change} placeholder={t("form_email_ph")}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-yellow transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-navy uppercase tracking-wide">{t("form_city")}</label>
          <input name="city" value={form.city} onChange={change} placeholder={t("form_city_ph")}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-yellow transition-colors" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-[11px] font-bold text-navy uppercase tracking-wide">{t("form_service")}</label>
        <select name="service" value={form.service} onChange={change}
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-yellow transition-colors bg-white">
          <option value="">{t("form_service_ph")}</option>
          <option>{t("form_svc1")}</option>
          <option>{t("form_svc2")}</option>
          <option>{t("form_svc3")}</option>
          <option>{t("form_svc4")}</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5 mb-6">
        <label className="text-[11px] font-bold text-navy uppercase tracking-wide">{t("form_message")}</label>
        <textarea name="message" value={form.message} onChange={change} rows={4} placeholder={t("form_message_ph")}
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-yellow transition-colors resize-none" />
      </div>

      <button type="submit" disabled={status === "loading"}
        className="w-full btn-yellow justify-center py-3 text-base disabled:opacity-60">
        {status === "loading" ? t("form_sending") : t("form_submit")}
      </button>

      {status === "success" && <p className="mt-4 text-green-600 text-sm font-semibold text-center">{t("form_success")}</p>}
      {status === "error" && <p className="mt-4 text-red-500 text-sm font-semibold text-center">{t("form_error")}</p>}
    </form>
  );
}
