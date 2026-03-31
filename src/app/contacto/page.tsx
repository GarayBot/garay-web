"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  User,
  Building2,
  Phone,
  MessageSquare,
} from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { RippleButton } from "@/components/ui/ripple-button";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@garay.es",
    href: "mailto:hola@garay.es",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barcelona, España",
    href: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun – Vie · 9:00 – 19:00",
    href: null,
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ivangarcia",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ivangarcia",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/ivangarcia",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactoPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar el mensaje.");
      }

      setFormState("success");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Error al enviar el mensaje."
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <DotPattern
          className="opacity-20 text-[#4a64eb]"
          width={20}
          height={20}
          cr={1}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <BlurFade delay={0.1} inView>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#666677] hover:text-[#4a64eb] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#6d86f5] mb-3">
              Contacto
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Hablemos de tu proyecto
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="mt-4 text-lg text-[#777788] max-w-2xl">
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas
              con una propuesta personalizada.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
          {/* Sidebar */}
          <div className="space-y-6">
            {CONTACT_INFO.map((item, i) => (
              <BlurFade key={item.label} delay={0.1 + i * 0.05} inView>
                <div className="rounded-xl border border-[#2a2d3a] bg-[#1a1a24] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4a64eb]/10 text-[#6d86f5]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#666677] mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-white hover:text-[#6d86f5] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}

            {/* Social links */}
            <BlurFade delay={0.3} inView>
              <div className="rounded-xl border border-[#2a2d3a] bg-[#1a1a24] p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#666677] mb-4">
                  Redes
                </p>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2d3a] bg-[#0f1117] text-[#6b7280] hover:text-white hover:border-[#4a64eb]/40 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Quick note */}
            <BlurFade delay={0.35} inView>
              <div className="rounded-xl border border-[#4a64eb]/20 bg-[#4a64eb]/5 p-5">
                <div className="flex items-start gap-3">
                  <Send className="h-4 w-4 mt-0.5 text-[#6d86f5] shrink-0" />
                  <p className="text-sm text-[#9999aa] leading-relaxed">
                    ¿Prefieres escribir directamente? Envía un email a{" "}
                    <a
                      href="mailto:hola@garay.es"
                      className="text-[#6d86f5] hover:underline"
                    >
                      hola@garay.es
                    </a>{" "}
                    y te respondo en menos de 24h.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Form */}
          <BlurFade delay={0.2} inView>
            <div className="rounded-2xl border border-[#2a2d3a] bg-[#1a1d27] p-6 md:p-8">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-[#777788] max-w-md">
                      Hemos recibido tu mensaje. Te responderemos en menos de 24
                      horas con una propuesta personalizada.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-8 text-sm text-[#6d86f5] hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="flex items-center gap-2 text-sm font-medium text-[#aaaabb] mb-2"
                        >
                          <User className="h-3.5 w-3.5" />
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="w-full rounded-lg border border-[#2a2d3a] bg-[#0f1117] px-4 py-3 text-sm text-white placeholder-[#555566] outline-none transition-colors focus:border-[#4a64eb] focus:ring-1 focus:ring-[#4a64eb]/30"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="flex items-center gap-2 text-sm font-medium text-[#aaaabb] mb-2"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="w-full rounded-lg border border-[#2a2d3a] bg-[#0f1117] px-4 py-3 text-sm text-white placeholder-[#555566] outline-none transition-colors focus:border-[#4a64eb] focus:ring-1 focus:ring-[#4a64eb]/30"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="flex items-center gap-2 text-sm font-medium text-[#aaaabb] mb-2"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+34 600 000 000"
                          className="w-full rounded-lg border border-[#2a2d3a] bg-[#0f1117] px-4 py-3 text-sm text-white placeholder-[#555566] outline-none transition-colors focus:border-[#4a64eb] focus:ring-1 focus:ring-[#4a64eb]/30"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="flex items-center gap-2 text-sm font-medium text-[#aaaabb] mb-2"
                        >
                          <Building2 className="h-3.5 w-3.5" />
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa"
                          className="w-full rounded-lg border border-[#2a2d3a] bg-[#0f1117] px-4 py-3 text-sm text-white placeholder-[#555566] outline-none transition-colors focus:border-[#4a64eb] focus:ring-1 focus:ring-[#4a64eb]/30"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="flex items-center gap-2 text-sm font-medium text-[#aaaabb] mb-2"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto, qué necesitas, plazos estimados..."
                        className="w-full rounded-lg border border-[#2a2d3a] bg-[#0f1117] px-4 py-3 text-sm text-white placeholder-[#555566] outline-none transition-colors focus:border-[#4a64eb] focus:ring-1 focus:ring-[#4a64eb]/30 resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {formState === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-400"
                      >
                        {errorMsg}
                      </motion.p>
                    )}

                    {/* Submit */}
                    <div className="flex items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-[#555566]">
                        * Campos obligatorios
                      </p>
                      <RippleButton
                        rippleColor="#4a64eb"
                        type="submit"
                        disabled={formState === "sending"}
                        className="bg-[#4a64eb] text-white rounded-full px-8 py-3 border-0 font-medium hover:bg-[#5b75f0] hover:shadow-lg hover:shadow-[#4a64eb]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formState === "sending" ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Enviar mensaje
                          </span>
                        )}
                      </RippleButton>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#2a2d3a] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl md:text-3xl font-bold">
              Sin compromiso. Sin letra pequeña.
            </h2>
            <p className="mt-3 text-[#777788] max-w-lg mx-auto">
              Analizamos tu caso, te proponemos soluciones y tú decides. Así de
              simple.
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
