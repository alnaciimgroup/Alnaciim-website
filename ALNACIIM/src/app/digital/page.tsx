import { Globe, Radio, LayoutDashboard, ArrowRight, CheckCircle2, Server, Database, Code, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import { CONTENT } from "@/data/content";
import DigitalHero from "@/components/digital/DigitalHero";

export default function DigitalHome() {
  const { pillars } = CONTENT.digital;

  const solutions = [
    {
      title: "Web & Software Development",
      description: "Custom internal systems and corporate websites built to specification. We develop from the ground up for industrial and commercial clients—not templates.",
      items: [
        {
          label: "Digital Presence",
          features: [
            "Corporate websites & landing pages",
            "Multi-language (Somali/English) support",
            "Customer-facing portals & E-commerce",
            "Mobile applications (iOS & Android)"
          ]
        },
        {
          label: "Business Logic",
          features: [
            "Custom ERP & operational workflows",
            "Cloud: AWS, Azure, Google Cloud",
            "API & 3rd-party system integration",
            "Relational & Document database design"
          ]
        }
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "IoT & Remote Monitoring",
      description: "Connectivity solutions for remote infrastructure in challenging locations, including areas without reliable cellular coverage.",
      items: [
        {
          label: "Sensor Networks",
          features: [
            "Flow, level, pressure & power sensors",
            "Satellite and LoRaWAN gateways",
            "Smart metering for water/fuel/power",
            "GPS remote asset location tracking"
          ]
        },
        {
          label: "Data Intelligence",
          features: [
            "Cloud data ingestion & processing",
            "Automated SMS & email alerting",
            "Live readings & historian trend charts",
            "Secure, encrypted data transmission"
          ]
        }
      ],
      image: "/images/power_systems_generators_1774871854169.png",
      icon: <Radio size={24} className="text-blue-600" />
    },
    {
      title: "SCADA & Industrial Data",
      description: "The digital interface for physical plant operations. Integrated directly with ALNM Engineering's mechanical and electrical installations.",
      items: [
        {
          label: "OT Platform",
          features: [
            "Ignition SCADA by Inductive Automation",
            "PLC (Siemens, AB, Schneider) integration",
            "HMI development for operator touchscreens",
            "OT network segmentation & cybersecurity"
          ]
        },
        {
          label: "Data Delivery",
          features: [
            "Secure web-native plant access",
            "RTU integration (Modbus/DNP3/61850)",
            "Prioritized alarm & notification logic",
            "Training & documented support contracts"
          ]
        }
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <LayoutDashboard size={24} className="text-blue-600" />
    }
  ];

  return (
    <div className="bg-white">
      <DigitalHero />

      {/* Industrial Grade Software Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-[42px] md:text-[56px] font-[900] text-slate-900 mb-6 tracking-tighter leading-[1]">Industrial Grade Software.</h2>
          <p className="text-[19px] text-slate-500 max-w-2xl mx-auto font-[450] leading-relaxed">
            From company websites to live SCADA monitoring dashboards—ALNM Digital delivers the software layer that infrastructure depends on.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {i === 0 && <Globe size={28} />}
                  {i === 1 && <Radio size={28} />}
                  {i === 2 && <LayoutDashboard size={28} />}
                </div>
                <h3 className="text-[24px] font-[900] text-slate-900 mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-[450]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consolidated Solutions Details */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-40">
            {solutions.map((section, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-10">
                    {section.icon}
                  </div>
                  <h2 className="text-[36px] md:text-[52px] font-[900] text-slate-900 leading-[1] tracking-tighter mb-8">
                    {section.title}
                  </h2>
                  <p className="text-[18px] text-slate-500 leading-relaxed mb-12 font-[450]">
                    {section.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
                    {section.items.map((item, j) => (
                      <div key={j}>
                        <h3 className="text-[11px] font-[800] text-slate-400 mb-6 uppercase tracking-[0.25em]">{item.label}</h3>
                        <ul className="space-y-4">
                          {item.features.map((feat, k) => (
                            <li key={k} className="flex items-start gap-3 text-slate-700 font-[500] text-[15px]">
                              <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[16/11] rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-100 group">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Highlight */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <ShieldCheck size={64} className="mb-10 text-blue-500 opacity-80" />
            <h2 className="text-[42px] md:text-[56px] font-[900] leading-none tracking-tighter mb-8">
              Industrial Secure Access.
            </h2>
            <p className="text-[19px] text-slate-400 mb-14 leading-relaxed font-[450]">
              ALNM Digital uses the Ignition SCADA platform—an industry-standard, web-native platform that runs in any browser. Secure, scalable, and built for 24/7 OT environments.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { icon: <Server size={20} />, label: "Edge Gateways" },
                { icon: <Database size={20} />, label: "Historian Data" },
                { icon: <LayoutDashboard size={20} />, label: "Live Dashboards" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-[800] uppercase tracking-[0.2em] text-[11px] text-slate-300">
                  <span className="text-blue-500">{item.icon}</span> {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-[36px] md:text-[48px] font-[900] text-slate-900 tracking-tighter mb-8">Ready to digitalise your operations?</h2>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-full font-[800] text-[16px] transition-all shadow-xl shadow-primary/20">
              Schedule a Technical Consultation
              <ArrowRight size={20} />
            </Link>
        </div>
      </section>
    </div>
  );
}
