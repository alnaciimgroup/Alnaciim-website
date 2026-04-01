import { Phone, MapPin, Globe, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <h1 className="text-[48px] md:text-[72px] font-[900] text-ink leading-[1] tracking-tighter mb-8 max-w-4xl mx-auto">
          How can we help power your vision?
        </h1>
        <p className="text-[19px] text-slate-500 max-w-2xl mx-auto font-[450] leading-relaxed">
          Whether you have a technical inquiry about our engineering solutions or need digital infrastructure support, our team is ready to assist.
        </p>
      </section>

      <section className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Trust Quote / Footer Hint */}
      <section className="container mx-auto px-6 mt-32">
        <div className="py-16 border-t border-slate-100 text-center max-w-4xl mx-auto">
          <p className="text-[20px] italic text-slate-400 font-[450]">
            "Reliability isn't just about the systems we build—it's about the partnership we maintain with our clients."
          </p>
          <p className="mt-4 text-[12px] font-[800] text-slate-500 uppercase tracking-widest">— Alnaciim Group Engineering Team</p>
        </div>
      </section>
    </div>
  );
}
