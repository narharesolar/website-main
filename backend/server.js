require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Security Middleware ──────────────────────────────────────────────────────
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "10kb" }));

// ── Rate Limiting ────────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { success: false, message: "Too many requests, please try again later." },
});

const quoteLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { success: false, message: "Too many quote requests, please try again later." },
});

// ── Nodemailer Transporter ───────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", company: "Narhare Solar Solutions" });
});

// Services list
app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        slug: "residential",
        title: "Residential Solar",
        description:
          "Complete rooftop solar installation for homes. Reduce electricity bills by up to 90% with our custom-designed systems.",
        icon: "home",
        features: ["Free site survey", "Custom system design", "Net metering support", "25-year panel warranty"],
      },
      {
        id: 2,
        slug: "commercial",
        title: "Commercial Solar",
        description:
          "Large-scale solar solutions for offices, factories, and commercial complexes. Maximize ROI with our industrial-grade systems.",
        icon: "building",
        features: ["High-capacity systems", "Remote monitoring", "Dedicated account manager", "Priority maintenance"],
      },
      {
        id: 3,
        slug: "solar-pumping",
        title: "Solar Water Pumping",
        description:
          "Agricultural and industrial solar pumping systems. Reliable off-grid water supply powered by clean solar energy.",
        icon: "droplet",
        features: ["AC & DC pump systems", "Variable frequency drives", "Off-grid capable", "IoT monitoring"],
      },
      {
        id: 4,
        slug: "maintenance",
        title: "AMC & Maintenance",
        description:
          "Annual maintenance contracts to keep your solar systems running at peak efficiency with regular cleaning and health checks.",
        icon: "tool",
        features: ["Quarterly inspections", "Panel cleaning", "Inverter servicing", "Performance reports"],
      },
    ],
  });
});

// Stats
app.get("/api/stats", (req, res) => {
  res.json({
    success: true,
    data: {
      projectsCompleted: 340,
      mwInstalled: 12.5,
      happyClients: 320,
      yearsExperience: 8,
      co2Saved: 9800,
    },
  });
});

// Contact form
app.post(
  "/api/contact",
  contactLimiter,
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
    body("phone")
      .optional()
      .matches(/^[+\d\s\-()]{7,15}$/)
      .withMessage("Invalid phone number"),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 1000 }),
    body("subject").optional().trim().isLength({ max: 200 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, message, subject } = req.body;

    try {
      // Send to company
      await transporter.sendMail({
        from: `"Narhare Solar Website" <${process.env.SMTP_USER}>`,
        to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
        subject: subject || `New Contact from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #F59E0B;">New Contact Form Submission</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:8px; font-weight:bold;">Name:</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px; font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
              <tr><td style="padding:8px; font-weight:bold;">Phone:</td><td style="padding:8px;">${phone || "N/A"}</td></tr>
              <tr><td style="padding:8px; font-weight:bold;">Message:</td><td style="padding:8px;">${message}</td></tr>
            </table>
          </div>
        `,
      });

      // Auto-reply to user
      await transporter.sendMail({
        from: `"Narhare Solar Solutions" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank you for contacting Narhare Solar Solutions",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #F59E0B;">Thank you, ${name}!</h2>
            <p>We've received your message and our team will get back to you within 24 hours.</p>
            <p style="color: #6B7280; font-size: 14px;">Narhare Solar Solutions | Bhopal, Madhya Pradesh</p>
          </div>
        `,
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
      console.error("Email error:", err);
      // Still return success to avoid exposing internals; log internally
      res.json({ success: true, message: "Message received. We'll be in touch soon!" });
    }
  }
);

// Quote request
app.post(
  "/api/quote",
  quoteLimiter,
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
    body("phone").notEmpty().withMessage("Phone is required"),
    body("propertyType").isIn(["residential", "commercial", "agricultural"]).withMessage("Invalid property type"),
    body("monthlyBill").isNumeric().withMessage("Monthly bill must be a number"),
    body("city").trim().notEmpty().withMessage("City is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, propertyType, monthlyBill, city, roofArea } = req.body;

    // Simple sizing estimate
    const avgRate = 7; // ₹7 per unit avg
    const monthlyUnits = parseFloat(monthlyBill) / avgRate;
    const systemSizeKW = (monthlyUnits / 120).toFixed(1); // ~120 units/kW/month in India
    const estimatedCost = (parseFloat(systemSizeKW) * 65000).toFixed(0); // ₹65k/kW avg

    try {
      await transporter.sendMail({
        from: `"Narhare Solar Website" <${process.env.SMTP_USER}>`,
        to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
        subject: `Quote Request - ${name} (${city})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #F59E0B;">New Quote Request</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>City:</b> ${city}</p>
            <p><b>Property Type:</b> ${propertyType}</p>
            <p><b>Monthly Bill:</b> ₹${monthlyBill}</p>
            <p><b>Roof Area:</b> ${roofArea || "Not provided"} sq ft</p>
            <hr/>
            <p><b>Estimated System Size:</b> ~${systemSizeKW} kW</p>
            <p><b>Estimated Cost:</b> ₹${parseInt(estimatedCost).toLocaleString("en-IN")}</p>
          </div>
        `,
      });

      res.json({
        success: true,
        message: "Quote request received!",
        estimate: {
          systemSizeKW: parseFloat(systemSizeKW),
          estimatedCostMin: Math.round(parseInt(estimatedCost) * 0.9),
          estimatedCostMax: Math.round(parseInt(estimatedCost) * 1.1),
          monthlyUnits: Math.round(monthlyUnits),
        },
      });
    } catch (err) {
      console.error("Quote email error:", err);
      res.json({
        success: true,
        message: "Quote request received! Our team will contact you shortly.",
      });
    }
  }
);

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Narhare Solar backend running on http://localhost:${PORT}`);
});
