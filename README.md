# Narhare Solar Solutions — Website

Next.js frontend-only website. Form submissions go directly to Telegram. No backend needed. Deploy free on Vercel.

## Files
```
narhare-solar/
├── pages/
│   ├── _app.js          ← app wrapper
│   └── index.js         ← full single-page website
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ContactForm.jsx  ← sends to Telegram
├── styles/
│   └── globals.css
├── .env.example
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Setup & Run

```bash
npm install
cp .env.example .env.local
# Add your Telegram credentials to .env.local
npm run dev
# Open http://localhost:3000
```

## Telegram Setup (2 minutes)
1. Open Telegram → search **@BotFather** → send `/newbot` → copy the token
2. Open **@userinfobot** → send any message → copy your Chat ID
3. Paste both into `.env.local`

## Deploy to Vercel (free)
1. Push code to GitHub
2. Import repo on vercel.com
3. Add env vars: `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` and `NEXT_PUBLIC_TELEGRAM_CHAT_ID`
4. Deploy ✅
