import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";
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
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-[32px] font-[900] text-slate-900 tracking-tight mb-8">Get in touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-[800] text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                    <p className="text-[18px] font-[700] text-ink">mohaarkoz@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-[800] text-slate-400 uppercase tracking-widest mb-1">Call Support</h3>
                    <p className="text-[18px] font-[700] text-ink">+252 61...</p>
                    <p className="text-[14px] text-slate-500 font-[500]">Available Sat-Thu, 8am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-[800] text-slate-400 uppercase tracking-widest mb-1">Our Headquarters</h3>
                    <p className="text-[18px] font-[700] text-ink">Mogadishu, Somalia</p>
                    <p className="text-[14px] text-slate-500 font-[500]">Regional offices in Puntland & Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
               <h3 className="text-[18px] font-[800] text-slate-900 mb-6 flex items-center gap-2">
                 <Clock size={20} className="text-blue-600" />
                 Response Times
               </h3>
               <p className="text-slate-500 font-[450] leading-relaxed text-[15px] mb-4">
                 We aim to respond to all technical inquiries within **24 hours**. For urgent operational support, please use the direct phone line.
               </p>
               <div className="flex items-center gap-4 text-[13px] font-[700] text-blue-600">
                 <span className="flex items-center gap-1.5"><Globe size={14} /> Global Distribution</span>
                 <span className="w-1 h-1 bg-slate-300 rounded-full" />
                 <span>24/7 Monitoring</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Trust Quote / Footer Hint */}
      <section className="container mx-auto px-6 mt-32">
        <div className="py-16 border-t border-slate-100 text-center max-w-4xl mx-auto">
          <p className="text-[20px] italic text-slate-400 font-[450]">
            "Reliability isn't just about the systems we build—it's about the partnership we maintain with our clients."
          </p>
          <p className="mt-4 text-[12px] font-[800] text-slate-500 uppercase tracking-widest">— ALNM Group Engineering Team</p>
        </div>
      </section>
    </div>
  );
}
