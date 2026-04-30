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
      <div className="text-center py-10">
        <div className="w-24 h-24 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-10 shadow-lg">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight uppercase">Message Sent!</h3>
        <p className="text-slate-500 font-medium leading-relaxed max-w-sm mx-auto mb-10">
          Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-blue-600 font-bold uppercase tracking-widest text-[11px] hover:text-blue-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="name" className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Full Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="w-full h-16 bg-white border border-slate-200 rounded-2xl px-6 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium placeholder:text-slate-300"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="phone" className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Phone Number</label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            placeholder="+252..."
            className="w-full h-16 bg-white border border-slate-200 rounded-2xl px-6 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium placeholder:text-slate-300"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="email" className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Email Address</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          className="w-full h-16 bg-white border border-slate-200 rounded-2xl px-6 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium placeholder:text-slate-300"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Project Details</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project or technical inquiry..."
          className="w-full bg-white border border-slate-200 rounded-3xl p-6 outline-none focus:border-blue-600 transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none"
        ></textarea>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 text-red-600 bg-red-50 border border-red-100 p-5 rounded-2xl font-bold text-[13px] uppercase tracking-wide">
          <AlertCircle size={20} />
          {message}
        </div>
      )}

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full h-18 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
      >
        {status === "loading" ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <>
            Send Technical Inquiry
            <Send size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </>
        )}
      </button>
    </form>
  );
}
