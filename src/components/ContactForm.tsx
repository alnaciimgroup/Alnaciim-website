"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to send");
      }
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again or contact us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/80 backdrop-blur-xl border border-primary-light rounded-3xl p-12 text-center shadow-fluid">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-[28px] font-[900] text-ink mb-4 tracking-tight">Message Sent!</h3>
        <p className="text-slate-600 font-[450] leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out to Alnaciim Group. Our team will review your request and get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-primary font-[700] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-fluid relative overflow-hidden group">
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0 group-hover:bg-primary/10 transition-colors" />

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full h-[60px] bg-slate-50/50 border border-slate-100 rounded-2xl px-6 outline-none focus:border-primary/30 focus:bg-white transition-all text-slate-900 font-[500]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="+252 61..."
              className="w-full h-[60px] bg-slate-50/50 border border-slate-100 rounded-2xl px-6 outline-none focus:border-primary/30 focus:bg-white transition-all text-slate-900 font-[500]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            className="w-full h-[60px] bg-slate-50/50 border border-slate-100 rounded-2xl px-6 outline-none focus:border-primary/30 focus:bg-white transition-all text-slate-900 font-[500]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[12px] font-[800] text-slate-400 uppercase tracking-widest ml-4">How can we help?</label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project or inquiry..."
            className="w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 outline-none focus:border-primary/30 focus:bg-white transition-all text-slate-900 font-[500] resize-none"
          ></textarea>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-3 text-red-500 bg-red-50 p-4 rounded-2xl font-[600] text-[14px]">
            <AlertCircle size={20} />
            {message}
          </div>
        )}

        <button
          disabled={status === "loading"}
          type="submit"
          className="w-full h-[64px] bg-primary hover:bg-primary-dark text-white rounded-2xl font-[800] text-[16px] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
