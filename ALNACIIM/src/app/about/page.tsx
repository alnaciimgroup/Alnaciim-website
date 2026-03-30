import { MapPin, ArrowRight, CheckCircle2, History, Building2, Globe2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white pt-32 lowercase-headings">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-[11px] font-[700] tracking-[0.1em] text-[#0066FF] uppercase">About ALNM Group</span>
            </div>
            <h1 className="text-[56px] md:text-[86px] font-[800] leading-[0.95] tracking-tight mb-8">
              Building the technical backbone of East Africa.
            </h1>
            <p className="text-[22px] text-slate-600 leading-relaxed max-w-2xl">
              ALNM Group is an East African infrastructure company headquartered in Garowe, Puntland, Somalia. We design, build and maintain water, energy, engineering and digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <History className="text-[#0066FF]" size={28} />
                <h2 className="text-[32px] md:text-[42px] font-[800] text-slate-900 tracking-tight">Our story.</h2>
              </div>
              <div className="space-y-6 text-[18px] text-slate-600 leading-relaxed">
                <p>
                  ALNM Group was founded in Garowe, Puntland, in 1998 as Al Naciim Water — a company dedicated to solving access to clean, reliable water.
                </p>
                <p>
                  We began by drilling water wells and installing basic water treatment systems. Over time, our technical capacity grew alongside our understanding of what East African communities actually needed.
                </p>
                <p>
                  Today, ALNM Group operates from offices in Garowe, Mogadishu and Hargeisa. What has not changed since 1998 is the commitment that started it all: to build infrastructure that works, in the places where it is needed most.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <div className="text-[32px] font-[800] text-slate-900 mb-2">1998</div>
                <div className="text-[13px] font-[700] text-slate-400 uppercase tracking-widest">Founded</div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <div className="text-[32px] font-[800] text-slate-900 mb-2">28+</div>
                <div className="text-[13px] font-[700] text-slate-400 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <div className="text-[32px] font-[800] text-slate-900 mb-2">3</div>
                <div className="text-[13px] font-[700] text-slate-400 uppercase tracking-widest">Regional Offices</div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <div className="text-[32px] font-[800] text-slate-900 mb-2">4</div>
                <div className="text-[13px] font-[700] text-slate-400 uppercase tracking-widest">Core Divisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Globe2 className="text-[#0066FF] mb-6" size={48} />
            <h2 className="text-[42px] md:text-[56px] font-[800] text-slate-900 mb-4">Where we operate.</h2>
            <p className="text-[18px] text-slate-600 max-w-2xl mx-auto">
              Strategic offices and regional hubs supporting projects across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Garowe",
                region: "Headquarters",
                desc: "The founding location and home of all four divisions. Main warehouse, fabrication facility and engineering design office."
              },
              {
                city: "Mogadishu",
                region: "Southern Operations",
                desc: "Regional operations covering southern Somalia and supporting Energy and Engineering projects in the south."
              },
              {
                city: "Hargeisa",
                region: "Northwest Hub",
                desc: "Supporting ALNM Water, Energy and Digital operations across Somaliland and the northwest region."
              }
            ].map((loc, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0066FF] shadow-sm mb-8 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <h3 className="text-[28px] font-[800] text-slate-900 mb-2 tracking-tight">{loc.city}</h3>
                <div className="text-[12px] font-[800] text-[#0066FF] uppercase tracking-[0.2em] mb-6">{loc.region}</div>
                <p className="text-[16px] text-slate-600 leading-relaxed italic">
                  "{loc.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Link Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[42px] md:text-[56px] font-[800] leading-tight mb-8">Four divisions. One group.</h2>
            <p className="text-[20px] text-slate-400 mb-12 leading-relaxed">
              ALNM Group takes projects from the initial concept through to a functioning, maintained system. One point of contact for the full project lifecycle.
            </p>
            <Link href="/group" className="inline-flex items-center gap-2 text-[18px] font-[700] hover:text-[#0066FF] transition-colors group">
              Explore all ALNM Divisions
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
